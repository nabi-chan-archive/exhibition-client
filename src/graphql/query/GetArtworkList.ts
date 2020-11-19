import {gql} from '@apollo/client';

export const GET_ARTWORK_LIST = gql`
    query artworks($type: String) {
        artworks(type: $type) {
            post_id
            type
            title
            image_src
            author {
                name
                position
            }
        }
    }
`;
