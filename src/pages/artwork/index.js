import React from 'react'
import {Header, Menu} from "@components/Header/Header";
import { Artworks } from "@components/Artworks/Artworks";

export default function Artworks() {
  return (
      <>
        <main>
          <Header>
            <Menu />
          </Header>
          
          <Artworks />
        </main>
      </>
  )
}
