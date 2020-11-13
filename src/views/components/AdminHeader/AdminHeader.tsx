import React from 'react';
import css from './AdminHeader.module.scss';
import Link from "next/link";

interface AdminHeaderProps {
}

const AdminHeader: React.FC<AdminHeaderProps> = () => {
  return (
    <header className={css.AdminHeader}>
      <h1 className={css.title}>
        대시보드
      </h1>
      
      <nav>
        <ul className={css.menu}>
          <li>
            <Link href="/admin/artwork/new">
              <a>
                작품 추가하기
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/logout">
              <a>
                로그아웃
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export {AdminHeader};
