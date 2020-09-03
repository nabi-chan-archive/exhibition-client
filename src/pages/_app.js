import React from 'react'
import Head from "next/head";
import '@styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
          <meta
              name="description"
              content="당신과 사회에 해롭지 않은 전시"
          />
          <meta
              name="keywords"
              content="무균전시,디자이너,개발자,전시회,온라인,코로나,온라인전시,포스터,웹전시,아카이브,사진작가,바이닐,Exhibition,Designer,Developer,Online,COVID-19,Event,Archive,Photographer,Vinyl"
          />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          {/*TODO : 도메인 바꾸기*/}
          <meta property="og:title" content="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛" />
          <meta
              property="og:description"
              content="당신과 사회에 해롭지 않은 전시"
          />
          {/*TODO : 이미지 주소 바꾸기*/}
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛" />
          <meta
              name="twitter:description"
              content="당신과 사회에 해롭지 않은 전시"
          />
          <meta name="twitter:creator" content="@pinot_kim" />
          <link rel="manifest" href="/manifest.json"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177194657-1"/>
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-177194657-1');` }}/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
