import {gql} from '@apollo/client';

export const REMOVEARTWORK = gql`
    mutation remove_artwork($id: ID!) {
        remove_artwork(id: $id)
    }
`;
