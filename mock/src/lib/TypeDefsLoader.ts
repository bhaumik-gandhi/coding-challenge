import { readFile } from 'fs-extra';
import { dirname, resolve } from 'path';


export default async function TypeLoader(typeFilePath: string) : Promise<any> {
  try {
    const graphqlPath = '../graphql' + typeFilePath;
    const typeFileData: any = await readFile(resolve(__dirname, graphqlPath), 'utf8');

    return typeFileData;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
