import React from 'react';
import css from './artworks.module.scss';
import {Artwork} from "@components/Artwork/Artwork";

function Row({artwork}) {
  return (
      <div className={css.row}>
        <Artwork {...artwork} />
      </div>
  )
}

function Column({index, artwork}) {
  const filtered = artwork.filter((_i, i) => (i - index) % 3 === 0)
  
  return (
      <div className={css.column}>
        {filtered.map((_i) => <Row artwork={_i} key={_i.id} />)}
      </div>
  )
}

export function Artworks({artwork, type}) {
  return (
      <section className={css.container}>
        {[0, 1, 2].map((i) => (
            <Column
                index={i}
                key={i}
                artwork={artwork.filter(i => !type ? true : i.type === type)}
            />
        ))}
      </section>
  );
}
