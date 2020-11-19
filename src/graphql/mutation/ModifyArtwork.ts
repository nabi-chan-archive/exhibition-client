import {gql} from '@apollo/client';

export const MODIFY_ARTWORK = gql`
    mutation modify_artwork($id: ID!, $input: ArtworkModifyInput!) {
        modify_artwork(id: $id, input: $input)
    }
`;
