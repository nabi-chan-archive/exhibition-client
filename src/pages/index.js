import React from 'react';
import Head from "next/head";
import { Header, Menu } from '@components/Header/Header'
import { Artworks } from "@components/Artworks/Artworks";

export default function Home() {
  return (
    <>
      <Head>
      </Head>

      <main>
        <Header>
          <Menu />
        </Header>
        
        <Artworks />
      </main>
    </>
  );
}
