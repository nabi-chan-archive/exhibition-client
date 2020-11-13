import {gql} from '@apollo/client';

export const MODIFYARTWORK = gql`
    mutation modify_artwork($id: ID!, $input: ArtworkModifyInput!) {
        modify_artwork(id: $id, input: $input)
    }
`;
