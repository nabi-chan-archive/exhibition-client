import React from 'react';
import Head from "next/head";
import { Header, Menu } from '@components/Header/Header'
import {Strip} from "@components/Strip/Strip";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
      </Head>

      <main id="main">
        <Header>
          <Menu />
        </Header>

        <video autoPlay muted loop>
          <source src="https://exhibiton-2021-image.s3.ap-northeast-2.amazonaws.com/POSTER.mp4" type="video/mp4" />
          해당 브라우저에서는 video 태그를 지원하지 않습니다.
        </video>
      </main>

      <Strip text={'20`21 Web Archive Exhibition 무균전시 - Exhibition of STERILE'} content={1} />
    </>
  );
}
