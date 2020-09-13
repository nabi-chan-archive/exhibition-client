import React from 'react';
import Head from "next/head";
import { Header } from '@components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
      </Head>

      <main style={{
        display: 'grid',
        gridTemplateColumns: '20vw 80vw'
      }}>
        <Header />
        
        <section>
        </section>
      </main>
    </>
  );
}
