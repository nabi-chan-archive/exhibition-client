import React from 'react'
import Head from "next/head";
import {useRouter} from "next/router";
import {NewsArticleJsonLd, NextSeo} from "next-seo";
import {Comment} from "@components/Comment/Comment";
import {Header, Back} from "@components/Header/Header";
import {Detail} from "@components/Detail/Detail";
import {Strip} from "@components/Strip/Strip";
import {query} from "@utils/query";

export default function ArticlePage({artwork}) {
  const {
    title,
    author,
    published,
    summary,
    image_src
  } = artwork;
  
  const route = useRouter();
  
  return (
      <>
        <Head>
          <title>
            무균전시 : {title} / {author.name}
          </title>
        </Head>
        <NextSeo
            openGraph={{
              title: `무균전시 : ${title} / ${author.name}`,
              description: summary,
              url: `http://localhost:3000${route.asPath}`,
              type: 'artwork',
              article: {
                publishedTime: {published},
                authors: [
                    author.name
                ],
              },
              images: [
                {
                  url: image_src,
                  width: 850,
                  height: 650,
                  alt: title,
                },
              ],
            }}
        />
        {/*TODO : UPDATE URL*/}
        <NewsArticleJsonLd
            url={`http://localhost:3000${route.asPath}`}
            title={`무균전시 : ${title} / ${author.name}`}
            images={[
              image_src
            ]}
            section="artwork"
            datePublished={published}
            authorName={author.name}
            publisherName="무균전시"
            description="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛"
            keywords="무균전시,디자이너,개발자,전시회,온라인,코로나,온라인전시,포스터,웹전시,아카이브,사진작가,바이닐,Exhibition,Designer,Developer,Online,COVID-19,Event,Archive,Photographer,Vinyl"
            body={summary}
        />
        
        <main>
          <Header>
            <Back/>
            <Comment data={artwork}/>
          </Header>
          
          <Detail data={artwork}/>
        </main>
        
        <Strip text={'Swipe Down'} content={4}/>
      </>
  )
}

ArticlePage.getInitialProps = async ctx => {
  const res = await query({
    query: `{ artwork(id : ${ctx.query.post_id}) { title summary published, image_src, author { name, position } } }`
  })
  
  return res.data
}
