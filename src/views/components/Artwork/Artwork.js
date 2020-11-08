import React from 'react';
import Link from "next/link";
import css from './artwork.module.scss';

export function Artwork({ image_src : artworkLink, title, post_id }) {
  return (
      <Link href={`/artwork/${post_id}`}>
        <a>
          <article className={css.artwork}>
            <img src={artworkLink} alt={title} className={css.poster} />
          </article>
        </a>
      </Link>
  )
}
