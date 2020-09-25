import React from 'react'
import {Content} from "@components/Header/Header";
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
  
      <Content isContent={true} />
  
      <img
          className={classcat([css.image, css.small])}
          src="https://placehold.it/3000x4000"
          alt="img_small"
      />
    </article>
  )
}
