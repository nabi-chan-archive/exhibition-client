import React from 'react';
import css from './artwork.module.scss';

export function Artwork({ img_src : artworkLink, title }) {
  return (
      <article className={css.artwork}>
        <img src={artworkLink} alt={title} className={css.poster} />
      </article>
  )
}
