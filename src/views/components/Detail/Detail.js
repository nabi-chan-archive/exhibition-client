import React from 'react'
import {Comment} from "@components/Comment/Comment";
import classcat from "classcat";
import css from './detail.module.scss';

export function Detail() {
  return (
    <article className={css.article}>
      <img
          className={classcat([css.image, css.big])}
          src="https://placehold.it/3000x4000"
          alt="img_big"
      />
  
      <Comment isContent />
  
      <img
          className={classcat([css.image, css.small])}
          src="https://placehold.it/3000x4000"
          alt="img_small"
      />
    </article>
  )
}
