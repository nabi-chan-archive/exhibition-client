import React from 'react';
import classcat from "classcat";
import css from './strip.module.scss'

interface StripProps {
  text: string,
  content: number
}

export const Strip: React.FC<StripProps> = ({text, content}) => (
  <aside className={classcat([css.strip])}>
    {[...Array(2)].map((_i, i) => (
      <ul key={i}>
        {[...Array(content)].map((_o, o) => (
          <li key={`${i} - ${o}`}>{text}</li>
        ))}
      </ul>
    ))}
  </aside>
)
