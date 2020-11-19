import {gql} from '@apollo/client';

export const ADD_ARTWORK = gql`
    mutation add_artwork($input: ArtworkInput!) {
        add_artwork(input: $input)
    }
`;
