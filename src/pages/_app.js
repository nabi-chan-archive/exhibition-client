import React from 'react'
import Head from "next/head";
import {NextSeo} from "next-seo";
import '@styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="manifest" href="/manifest.json"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177194657-1"/>
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-177194657-1');` }}/>
        </Head>
        {/*TODO : UPDATE URL, Images*/}
        <NextSeo
          canonical=""
          description="당신과 사회에 해롭지 않은 전시"
          keywords="무균전시,디자이너,개발자,전시회,온라인,코로나,온라인전시,포스터,웹전시,아카이브,사진작가,바이닐,Exhibition,Designer,Developer,Online,COVID-19,Event,Archive,Photographer,Vinyl"
          openGraph={{
            url: "",
            type: "website",
            locale: "ko_KR",
            title: "20`21 웹 아카이브전 무균전시 : 새 시대 새 빛",
            description: "당신과 사회에 해롭지 않은 전시",
            images: [],
            site_name: "무균전시 : 새 시대 새 빛"
          }}
          twitter={{
            cardType: "summary_large_image",
            site: "@paijeen",
            handle: "@pinot_kim"
          }}
        />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
