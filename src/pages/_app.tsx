import React from 'react'
import Head from "next/head";
import {ApolloProvider} from '@apollo/client';
import '@styles/main.scss';
import NextApp, {AppInitialProps} from "next/app";
import {ApolloClient} from "@apollo/client";
import {createApolloClient} from "@graphql/client";

type AppProps = AppInitialProps & {
  apolloClient?: ApolloClient<object>;
};

class App extends NextApp<AppProps> {
  render() {
    const {
      pageProps,
      Component,
      apolloClient = createApolloClient({})
    } = this.props;
    
    return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
          <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta
              name="description"
              content="당신과 사회에 해롭지 않은 전시"
            />
            <meta
              name="keywords"
              content="무균전시,디자이너,개발자,전시회,온라인,코로나,온라인전시,포스터,웹전시,아카이브,사진작가,바이닐,Exhibition,Designer,Developer,Online,COVID-19,Event,Archive,Photographer,Vinyl,2020exhibition"
            />
            <meta property="og:url" content="https://2021exhibition.online"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛"/>
            <meta
              property="og:description"
              content="당신과 사회에 해롭지 않은 전시"
            />
            <meta property="og:image"
                  content="https://exhibiton-2021-image.s3.ap-northeast-2.amazonaws.com/POSTER.jpg"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛"/>
            <meta
              name="twitter:description"
              content="당신과 사회에 해롭지 않은 전시"
            />
            <meta name="twitter:creator" content="@pinot_kim"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177194657-1"/>
            <script
              dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-177194657-1');`}}/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap" rel="stylesheet"/>
          </>
        </Head>
        
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default App;
