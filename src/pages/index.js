import React from 'react';
import Head from "next/head";
import { Header, Menu } from '@components/Header/Header'
import {Strip} from "@components/Strip/Strip";

export default function HomePage() {
  return (
    <>
      <Head>
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
