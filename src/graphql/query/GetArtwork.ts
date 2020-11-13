import { gql } from '@apollo/client';

export const GET_ARTWORK = gql`
  query artwork($post_id: ID!) {
    artwork(id: $post_id) {
      type
      title
      summary
      image_src
      author {
        name
        position
      }
    }
  }
`;
