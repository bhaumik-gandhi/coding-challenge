import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const config = {
  APP_PORT: process.env.APP_PORT,
  GRAPHQL_ROUTE: process.env.GRAPHQL_ROUTE,
  GRAPHQL_PLAYGROUND: process.env.GRAPHQL_PLAYGROUND,
};

export default config;
