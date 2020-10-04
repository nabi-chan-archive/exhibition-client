import React from 'react'
import Head from "next/head";
import {Comment} from "@components/Comment/Comment";
import {Header, Back} from "@components/Header/Header";
import {Detail} from "@components/Detail/Detail";
import {Strip} from "@components/Strip/Strip";

export default function ArticlePage({ artwork }) {
  const {
    title,
    author
  } = artwork;
  
  return (
      <>
        <Head>
          <title>
            무균전시 : {title} / {author.name}
          </title>
        </Head>
        
        <main>
          <Header>
            <Back />
            <Comment data={artwork} />
          </Header>
  
          <Detail data={artwork} />
        </main>
  
        <Strip text={'Swipe Down'} content={4} />
      </>
  )
}

ArticlePage.getInitialProps = async ctx => {
  console.log(ctx.query.post_id)
  
  return {
    "artwork": {
      "title": "테스트",
      "summary": "대충 있어보이는 표현들",
      "image_src": "https://placehold.it/1920x1080",
      "author": {
        "name": "유나비",
        "position": "개발자"
      }
    }
  }
}
