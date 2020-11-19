import React, {useEffect} from 'react';
import css from './AdminHeader.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {getCookie} from "@utils/cookie";

interface AdminHeaderProps {
}

const AdminHeader: React.FC<AdminHeaderProps> = () => {
  const route = useRouter();
  
  useEffect(() => {
    if (!getCookie('accessToken')) {
      alert('로그인해주세요.');
      route.replace('/admin/login').then(() => "");
    }
  }, []);
  
  return (
    <header className={css.AdminHeader}>
      <h1 className={css.title}>
        <Link href="/admin">
          <a>대시보드</a>
        </Link>
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
