import React, {useState, useCallback} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import css from './header.module.scss';
import classcat from "classcat";

function Category({isOpened}) {
  return (
      <ul className={classcat([css.category, isOpened && css.active])}>
        <li>
          <Link href="/photography"><a>photography</a></Link>
        </li>
        <li>
          <Link href="/poster"><a>poster</a></Link>
        </li>
      </ul>
  )
}

function Back() {
  const router = useRouter();
  
  return <h2 className={classcat(css.menuTitle)} onClick={() => router.back()}>Back</h2>;
}

export function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpened(!isOpened)
  }, [isOpened])
  return (
      <div className={css.Header}>
        <Link href="/">
          <h1 className={css.title}>
            <a>{'20`21\n웹 아카이브전\n무균전시\n:\n새 시대\n새 빛'}</a>
          </h1>
        </Link>
        
        <div className={css.menu}>
          <h2 className={classcat([css.menuTitle, isOpened && css.active])} onClick={toggleOpen}>category</h2>
  
          <Category isOpened={isOpened} />
        </div>
      </div>
  )
}
