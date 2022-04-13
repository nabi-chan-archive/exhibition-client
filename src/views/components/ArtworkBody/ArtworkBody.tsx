import React from 'react'
import css from './ArtworkBody.module.scss';
import classcat from "classcat";
import {Artwork} from "@constants/types";
import {ArtworkInfo} from "@components/ArtworkInfo/ArtworkInfo";

interface ArtworkBodyProps {
  data: Artwork
}

export const ArtworkBody : React.FC<ArtworkBodyProps> = ({data}) => {
  if (data.video) {
    return (
        <article className={css.article}>
          <video controls muted loop className={classcat([css.image, css.big])}>
            <source src={data.image_src} type="video/mp4" />
          </video>
      
          <ArtworkInfo isContent data={data}/>
  
          <video controls muted loop className={classcat([css.image, css.small])}>
            <source src={data.image_src} type="video/mp4" />
          </video>
        </article>
    )
  }
  
  return (
    <article className={css.article}>
      <img
        className={classcat([css.image, css.big])}
        src={data.image_src}
        alt="img_big"
      />
      
      <ArtworkInfo isContent data={data}/>
      
      <img
        className={classcat([css.image, css.small])}
        src={data.image_src}
        alt="img_small"
      />
    </article>
  )
}
