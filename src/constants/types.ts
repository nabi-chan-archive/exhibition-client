export type ArtworkType = 'poster' | 'photography'

export interface Artwork {
  post_id: number;
  type: ArtworkType;
  title: string;
  summary: string;
  image_src: string;
  author: string;
  position?: string;
}

export interface User {
  user_id: number;
  name: string;
  email: string;
  is_admin: boolean;
  password: string;
}
