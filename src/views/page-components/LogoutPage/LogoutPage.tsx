import React, {useEffect} from 'react';
import {delCookie} from "@utils/cookie";
import {useRouter} from "next/router";
import Link from "next/link";

interface LogoutPageProps {
}

const LogoutPage: React.FC<LogoutPageProps> = () => {
  const route = useRouter();
  
  useEffect(() => {
    const check = confirm('정말로 로그아웃 하시겠습니까?');
    if (!check) return;
    delCookie('accessToken');
    delCookie('refreshToken');
  
    alert('로그아웃 완료!');
    
    route
      .push('/admin/login')
      .then(() => console.log('redirect complete'));
  }, []);
  
  return (
    <div />
  );
}

export default LogoutPage;
