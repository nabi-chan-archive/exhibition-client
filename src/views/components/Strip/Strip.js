import React from 'react';
import classcat from "classcat";
import css from './strip.module.scss'

export function Strip({text, content}) {
  if (!content) throw new Error('no content length')
  
  return (
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
}
