import {gql} from '@apollo/client';

export const REMOVE_ARTWORK = gql`
    mutation remove_artwork($id: ID!) {
        remove_artwork(id: $id)
    }
`;
