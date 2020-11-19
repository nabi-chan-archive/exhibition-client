import React from 'react';
import Link from "next/link";
import css from './header.module.scss';

interface HeaderProps {
  children: JSX.Element | JSX.Element[]
}

export const Header: React.FC<HeaderProps> = ({children}) => (
  <header className={css.Header}>
    <Link href="/">
      <h1 className={css.title}>
        <a>{'20`21\n웹 아카이브전\n무균전시\n:\n새 시대\n새 빛'}</a>
      </h1>
    </Link>
    
    <div className={css.content}>
      {children}
    </div>
  </header>
)
