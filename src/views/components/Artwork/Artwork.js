import React from 'react';
import Link from "next/link";
import css from './artwork.module.scss';

export function Artwork({ img_src : artworkLink, title, id }) {
  return (
      <Link href={`/artwork/${id}`}>
        <a>
          <article className={css.artwork}>
            <img src={artworkLink} alt={title} className={css.poster} />
          </article>
        </a>
      </Link>
  )
}
