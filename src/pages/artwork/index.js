import React from 'react'
import {Header, Menu} from "@components/Header/Header";
import { Artworks } from "@components/Artworks/Artworks";
import {Strip} from "@components/Strip/Strip";

export default function ArtworksPage() {
  return (
      <>
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
