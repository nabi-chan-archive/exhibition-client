import React from 'react';
import Head from "next/head";
import { Header } from '@components/Header/Header'
import { Artworks } from "@components/Artworks/Artworks";

export default function Home() {
  return (
    <>
      <Head>
      </Head>

      <main>
        <Header />
        
        <section>
          <Artworks />
        </section>
      </main>
    </>
  );
}
