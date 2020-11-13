import {ApolloClient, InMemoryCache, ApolloLink, from} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {getCookie, setCookie} from '@utils/cookie';
import {query} from '@utils/query';
import {decodeToken} from '@utils/utils';

const isServer = typeof window === 'undefined';

const refreshMiddleWare = new ApolloLink((operation, forward) => {
  if (isServer) {
    return forward(operation);
  }
  
  if (!getCookie('accessToken')) {
    return forward(operation);
  }
  
  const {exp} = decodeToken(getCookie('accessToken'));
  const now = new Date().getTime();
  
  if (exp * 1000 - now <= 60 * 15) {
    query({
      query: `{
          renew_token(input: {
            accessToken: "${getCookie('accessToken')}"
            refreshToken: "${getCookie('refreshToken')}"
          }) {
            accessToken
          }
        }`,
    }).then((data) => {
      const {accessToken} = data.renew_token
      setCookie('accessToken', accessToken, 60 * 60 * 12);
    }).catch((error) => {
      console.error(error);
      alert('Token을 재발급 받는 과정에서 오류가 발생했습니다 :(');
    })
  }
  
  return forward(operation);
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  if (isServer) {
    return forward(operation);
  }
  
  operation.setContext(({headers = {}}) => ({
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

// @ts-ignore
const windowApolloState = !isServer && __NEXT_DATA__.apolloState;

interface ApolloClientOptions {
  ssrMode?: boolean;
  initialState?: object;
}

export const createApolloClient = (options: ApolloClientOptions) => {
  const {
    ssrMode = isServer,
    initialState = windowApolloState
  } = options;
  
  return new ApolloClient({
    ssrMode: ssrMode,
    cache: new InMemoryCache().restore(initialState),
    link: from([refreshMiddleWare, authMiddleWare, httpLink]),
  });
}
