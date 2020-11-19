import React from 'react';
import Link from "next/link";
import css from './ArtworkList.module.scss';
import {Artwork as ArtworkType} from "@constants/types";

interface ArtworkListProps {
  artworks: ArtworkType[];
}

const ArtworkList: React.FC<ArtworkListProps> = ({artworks}) => {
  return (
    <section className={css.ArtworkList}>
      {[0, 1, 2].map((columnIndex) => (
        <div className={css.column} key={columnIndex}>
          {artworks
            .filter((_, rowIndex) => (rowIndex - columnIndex) % 3 === 0)
            .map(({post_id, image_src, title}) => (
              <Link href={`/artwork/${post_id}`} key={post_id}>
                <a className={css.row}>
                  <img src={image_src} alt={title} className={css.poster}/>
                </a>
              </Link>
            ))}
        </div>
      ))}
    </section>
  );
};

export {
  ArtworkList
}
