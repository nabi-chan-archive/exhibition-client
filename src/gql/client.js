import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'; 
import { withApollo } from 'next-with-apollo';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      link: createUploadLink({
        uri: process.env.API_PATH
      })
    })
);
