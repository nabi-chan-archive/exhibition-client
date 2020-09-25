import React, {useState, useCallback} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import css from './header.module.scss';
import classcat from "classcat";

export function Menu() {
  const [isOpened, setIsOpened] = useState(false);
  
  const toggleOpen = () => setIsOpened(prevState => !prevState);
  
  return (
      <div className={css.menu}>
        <h2 className={classcat([css.subTitle, isOpened && css.active])} onClick={toggleOpen}>category</h2>
  
        <ul className={classcat([css.category, isOpened && css.active])}>
          <li>
            <Link href="/photography"><a>photography</a></Link>
          </li>
          <li>
            <Link href="/poster"><a>poster</a></Link>
          </li>
        </ul>
      </div>
  )
}

export function Back() {
  const router = useRouter();
  
  return <h2 className={classcat([css.subTitle, css.active])} onClick={() => router.back()}>Back</h2>;
}

export function Content({ isContent }) {
  return (
      <div className={classcat([css.content, isContent && css.isContent])}>
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

export function Header({ children }) {
  return (
      <div className={css.Header}>
        <Link href="/">
          <h1 className={css.title}>
            <a>{'20`21\n웹 아카이브전\n무균전시\n:\n새 시대\n새 빛'}</a>
          </h1>
        </Link>
        
        {children}
      </div>
  )
}
