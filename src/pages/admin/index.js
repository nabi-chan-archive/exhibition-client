import React, {useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from "next/router";
import {getCookie} from "@utils/cookie";
import {NextSeo} from "next-seo";

export default function AdminHomePage() {
  const router = useRouter();
  
  useEffect(() => {
    const accessToken = getCookie('accessToken');
    
    if (!accessToken) {
      router.replace('/admin/login');
    }
  }, []);
  
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 대시보드</title>
          <NextSeo noindex={true} />
        </Head>
        
        <div>
          Admin Home Welcolme!
        </div>
      </>
  );
}
