import React from 'react'
import Head from "next/head";
import {useRouter} from "next/router";
import {Comment} from "@components/Comment/Comment";
import {Header, Back} from "@components/Header/Header";
import {Detail} from "@components/Detail/Detail";
import {Strip} from "@components/Strip/Strip";

export default function ArticlePage() {
  const router = useRouter();
  const {post_id} = router.query
  
  return (
      <>
        <Head>
          <title>
            무균전시 : 저자명 / 이름
          </title>
        </Head>
        
        <main>
          <Header>
            <Back />
            <Comment />
          </Header>
  
          <Detail />
        </main>
  
        <Strip text={'Swipe Down'} content={4} />
      </>
  )
}
