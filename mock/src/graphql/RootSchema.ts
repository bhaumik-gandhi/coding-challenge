import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import * as deepmerge from 'deepmerge';
import { importSchema } from 'graphql-import';
import { resolve } from 'path';

import * as Users from './Users/mocks';

export async function generateRootSchema(): Promise<any> {
  // Type definition entry point.
  const typeDefs = importSchema(resolve(__dirname, './schema.graphql'));

  // MOCKED SCHEMA
  const MockSchema = makeExecutableSchema({ typeDefs });

  const mocks = deepmerge.all([ Users ]);

  // add Mocks
  addMockFunctionsToSchema({ schema: MockSchema, mocks: { ...mocks }, preserveResolvers: true });

  return MockSchema;
}
