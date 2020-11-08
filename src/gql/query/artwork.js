import { gql } from '@apollo/client';

export const GETARTWORKS = gql`
  query artworks {
    artworks {
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

export const GETARTWORK = gql`
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