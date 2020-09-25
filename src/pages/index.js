import React from 'react';
import Head from "next/head";
import { Header, Menu } from '@components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
      </Head>

      <main>
        <Header>
          <Menu />
        </Header>
        
      </main>
    </>
  );
}
