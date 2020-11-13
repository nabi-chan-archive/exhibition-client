import React from 'react';
import classcat from "classcat";
import css from "./comment.module.scss";

export function Comment({ isContent, data }) {
  const {title, author, summary} = data;

  return (
      <div className={classcat([css.comment, isContent && css.isContent])}>
        <h3 className={classcat([css.artTitle])}>{title}</h3>

        <h4 className={classcat([css.about])}>
          {author.name}
          <br/>
          {author.position}
        </h4>

        <p className={classcat([css.text])}>
          {summary}
        </p>
      </div>
  )
}
