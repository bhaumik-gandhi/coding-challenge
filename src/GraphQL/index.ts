import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { APOLLO_CLIENT_URL, APOLLO_CLIENT_ENDPOINT } from '../Config';

export default new ApolloClient({
  link: new HttpLink({ uri: APOLLO_CLIENT_URL + APOLLO_CLIENT_ENDPOINT }),
  cache: new InMemoryCache().restore({/*Load from LocalStorage?*/})
});
