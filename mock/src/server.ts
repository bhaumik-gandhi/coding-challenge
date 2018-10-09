import { GraphQLServer } from 'graphql-yoga';
import { express as voyager } from 'graphql-voyager/middleware';

import config from './lib/Env/envConfig';

import { generateRootSchema } from './graphql/RootSchema';

const {
  APP_PORT,
  GRAPHQL_ROUTE,
  GRAPHQL_PLAYGROUND,
} = config;

generateRootSchema()
  .then(schema => {
    const server = new GraphQLServer({
      schema,
      context: {
        token: 'This is a logged in user token',
      },
    });

    const runtimeOptions = {
      port: Number(APP_PORT),
      endpoint: GRAPHQL_ROUTE,
      playground: GRAPHQL_PLAYGROUND,
    };

    server.express.use('/voyager', voyager({ endpointUrl: '/graphql' }));

    server.start(runtimeOptions, ({ port }) =>
      console.log(
        `Server started, listening on port ${port} for incoming requests.`
      )
    );
  })
  .catch(err => console.error('Mounting server error', err));
