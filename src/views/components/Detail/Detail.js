import React from 'react'
import {Comment} from "@components/Comment/Comment";
import classcat from "classcat";
import css from './detail.module.scss';

export function Detail({ data }) {
  return (
    <article className={css.article}>
      <img
          className={classcat([css.image, css.big])}
          src={data.image_src}
          alt="img_big"
      />
  
      <Comment isContent data={ data } />
  
      <img
          className={classcat([css.image, css.small])}
          src={data.image_src}
          alt="img_small"
      />
    </article>
  )
}
