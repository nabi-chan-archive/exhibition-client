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

      <main>
        <Header>
          <Menu />
        </Header>
        
      </main>
  
      <Strip text={'20`21 Web Archive Exhibition 무균전시 - Exhibition of STERILE'} content={1} />
    </>
  );
}
