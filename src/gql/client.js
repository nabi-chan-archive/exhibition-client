import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-with-apollo';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      uri: process.env.API_PATH,
    })
);
