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
  
        <img
            src="https://placehold.it/3000x4000"
            alt="img_big"
        />
      </main>
  
      <Strip text={'20`21 Web Archive Exhibition 무균전시 - Exhibition of STERILE'} content={1} />
    </>
  );
}
