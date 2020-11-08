import {gql} from '@apollo/client';

export const ADDARTWORK = gql`
    mutation add_artwork($input: ArtworkInput!) {
        add_artwork(input: $input)
    }
`;
