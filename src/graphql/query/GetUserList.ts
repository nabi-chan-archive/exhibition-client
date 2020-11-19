import {gql} from '@apollo/client';

export const GET_USER_LIST = gql`
    query get_users {
        get_users {
            user_id
            name
            email
            is_admin
        }
    }
`;
