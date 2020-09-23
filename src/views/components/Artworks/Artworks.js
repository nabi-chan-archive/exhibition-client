import React from 'react';
import css from './artworks.module.scss';

import {Artwork} from "@components/Artwork/Artwork";

const artworkMock = [
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'photography',
    img_src: 'http://placehold.it/1920x1080',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
  
  {
    type: 'poster',
    img_src: 'http://placehold.it/300x400',
    title: 'test'
  },
]

function Row({ artwork }) {
  return (
      <div className={css.row}>
        <Artwork {...artwork} />
      </div>
  )
}

export function Artworks() {
  const cell = Math.floor(artworkMock.length / 4)
  
  return (
      <section className={css.container}>
          <div className={css.column}>
            {artworkMock.map((artwork, i) => i <= cell ? <Row artwork={artwork} key={i} /> : null)}
          </div>
          <div className={css.column}>
            {artworkMock.map((artwork, i) => i <= cell * 2 && i > cell ? <Row artwork={artwork} key={i} /> : null)}
          </div>
          <div className={css.column}>
            {artworkMock.map((artwork, i) => i <= cell * 3 && i > cell * 2 ? <Row artwork={artwork} key={i} /> : null)}
          </div>
          <div className={css.column}>
            {artworkMock.map((artwork, i) => i >= cell * 3 ? <Row artwork={artwork} key={i} /> : null)}
          </div>
      </section>
  );
}
