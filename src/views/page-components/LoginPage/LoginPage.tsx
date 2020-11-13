import React, {useCallback, useEffect, useRef} from 'react';
import {setCookie} from '@utils/cookie';
import {sha512} from 'js-sha512';
import {LOGIN} from '@graphql/query/login';
import {useRouter} from 'next/router';
import {useLazyQuery} from "@apollo/client";

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const router = useRouter();
  const [login, {data}] = useLazyQuery(LOGIN);
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = sha512(passwordRef.current.value).toUpperCase();
    
    await login({
      variables: {
        input: {
          email,
          password
        }
      }
    });
    
    // 12시간
    // setCookie("accessToken", accessToken, 60 * 60 * 12);
    // 7일
    // setCookie("refreshToken", refreshToken, 60 * 60 * 24 * 7);
  }, [emailRef, passwordRef]);
  
  useEffect(() => {
    if (!data) return;
    
    const {
      login: {
        token: {
          accessToken,
          refreshToken
        }
      }
    } = data;
    
    setCookie("accessToken", accessToken, 60 * 60 * 12);
    setCookie("refreshToken", refreshToken, 60 * 60 * 24 * 7);
    
    router
      .push('/admin')
      .then(() => console.log('redirect complete'));
  }, [data]);
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" required ref={emailRef}/>
      <input type="password" required ref={passwordRef}/>
      
      <button>
        로그인
      </button>
    </form>
  );
}

export default LoginPage;
