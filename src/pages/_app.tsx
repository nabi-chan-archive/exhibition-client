import React from 'react'
import Head from "next/head";
import {NextSeo} from "next-seo";
import {ApolloProvider} from '@apollo/client';
import withApolloClient from "@gql/client";
import '@styles/main.scss';
import {NextPage} from "next";
import {AppProps} from 'next/app';

interface AppPageProps {
  Component: AppProps["Component"];
  pageProps: {};
  apollo: any;
}

// @ts-ignore
const App : NextPage<AppPageProps> = ({Component, pageProps, apollo}) => {
  return (
    <>
      <Head>
        <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="manifest" href="/manifest.json"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177194657-1"/>
        <script
          dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-177194657-1');`}}/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      {/*TODO : UPDATE URL, Images*/}
      <NextSeo
        canonical=""
        description="당신과 사회에 해롭지 않은 전시"
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
      
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

// @ts-ignore
App.getInitialProps = async ({ Component, ctx }: AppProps) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  
  return {
    pageProps
  }
}

export default withApolloClient(App);
