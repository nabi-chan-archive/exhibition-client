import {gql} from '@apollo/client';

export const LOGIN = gql`
    query login($input: UserLoginInput!) {
        login(input: $input) {
            token {
                accessToken
                refreshToken
            }
        }
    }
`;
