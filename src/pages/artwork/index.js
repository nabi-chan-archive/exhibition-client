import React from 'react'
import {Header, Menu} from "@components/Header/Header";
import { Artworks } from "@components/Artworks/Artworks";
import {Strip} from "@components/Strip/Strip";
import Head from "next/head";

export default function ArtworksPage() {
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
        </Head>
        
        <main>
          <Header>
            <Menu />
          </Header>
          
          <Artworks />
        </main>
  
        <Strip text={'Swipe Down'} content={4} />
      </>
  )
}
