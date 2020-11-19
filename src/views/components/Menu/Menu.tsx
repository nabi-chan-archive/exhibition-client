import React, {useState} from 'react';
import Link from "next/link";
import classcat from "classcat";
import css from "./Menu.module.scss";

interface MenuProps {
}

export const Menu: React.FC<MenuProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  
  const toggleOpen = () => setIsOpened(prevState => !prevState);
  
  return (
    <div className={css.menu}>
      <h2 className={classcat([css.toggle, isOpened && css.active])} onClick={toggleOpen}>category</h2>
    
      <ul className={classcat([css.category, isOpened && css.active])}>
        <li>
          <Link href="/artworks"><a>all</a></Link>
        </li>
        <li>
          <Link href="/artworks/photography"><a>photography</a></Link>
        </li>
        <li>
          <Link href="/artworks/poster"><a>poster</a></Link>
        </li>
      </ul>
    </div>
  )
}

