import {gql} from '@apollo/client';

export const GET_USER = gql`
    query get_user($user_id: ID!) {
        get_user(id: $user_id) {
            name
            email
            is_admin
        }
    }
`;
