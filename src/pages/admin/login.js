import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import {NextSeo} from 'next-seo'
import {query} from "@utils/query";
import {getCookie, setCookie} from "@utils/cookie";
import {sha512} from "js-sha512";
import {useRouter} from "next/router";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
    const accessToken = getCookie('accessToken');
    
    if (accessToken) {
      router.replace('/admin');
    }
  }, []);
  
  const handleChange = ({target}) => setFormData({
    ...formData,
    [target.name]: target.value
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await query({
      query: `{ login(input: {email: "${formData.email}", password: "${sha512(formData.password)}"}) { token { accessToken, refreshToken} } }`
    });

    if (!res.data.login) {
      alert('계정 정보를 찾을 수 없습니다.');
      return;
    }

    const {accessToken, refreshToken} = res.data.login.token
    
    // 12시간
    setCookie("accessToken", accessToken, 60 * 60 * 12);
    // 7일
    setCookie("refreshToken", refreshToken, 60 * 60 * 24 * 7);
  
    router.push('/admin')
  }
  
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 로그인</title>
          <NextSeo noindex={true}/>
        </Head>
        
        <div>
          <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="이메일"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={handleChange}
                required
            />
            <button type="submit">로그인하기</button>
          </form>
        </div>
      </>
  )
}
