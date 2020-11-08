import { ApolloClient, InMemoryCache, ApolloLink, from } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { withApollo } from 'next-with-apollo';
import { query } from '@utils/query';
import { getCookie, setCookie } from '@utils/cookie';
import { decodeToken } from '@utils/utils';

const refreshMiddleWare = new ApolloLink(async (operation, forward) => {
  if (typeof window === 'undefined') {
    return forward(operation);
  }

  if (!getCookie('accessToken')) {
    return forward(operation);
  }

  const { exp } = decodeToken(getCookie('accessToken'));
  const now = new Date().getTime();

  if (exp * 1000 - now <= 60 * 15) {
    const {
      renew_token: { accessToken },
    } = await query({
      query: `{
        renew_token(input: {
          accessToken: "${getCookie('accessToken')}"
          refreshToken: "${getCookie('refreshToken')}"
        }) {
          accessToken
        }
      }`,
    });

    setCookie('accessToken', accessToken, 60 * 60 * 12);
  }

  return forward(operation);
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  if (typeof window === 'undefined') {
    return forward(operation);
  }

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: 'Bearer ' + getCookie('accessToken') || null,
    },
  }));

  return forward(operation);
});

const httpLink = createUploadLink({
  uri: process.env.API_PATH,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      link: from([refreshMiddleWare, authMiddleWare, httpLink]),
    })
);
