import React from 'react'
import Head from "next/head";
import {useRouter} from "next/router";
import {Header} from "@components/Header/Header";
import {Detail} from "@components/Detail/Detail";

export default function Articles() {
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
          <Header/>
  
          <Detail />
        </main>
      </>
  )
}
