import React from 'react';
import classcat from "classcat";
import css from "./comment.module.scss";

export function Comment({ isContent }) {
  return (
      <div className={classcat([css.comment, isContent && css.isContent])}>
        <h3 className={classcat([css.artTitle])}>컨텐츠 내용</h3>
        
        <h4 className={classcat([css.about])}>
          이름
          <br/>
          직책
        </h4>
        
        <p className={classcat([css.text])}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur at deleniti dolores eos, facilis harum magnam minus natus nisi officiis placeat quas quidem tempore velit veniam vitae. Ad, atque beatae commodi ea esse, possimus quod ratione rem repellat repellendus, rerum sunt ullam vitae. A consequuntur dicta nulla sint vero.
        </p>
      </div>
  )
}
