import React from 'react'
import {shuffle} from "@utils/utils";
import {Header, Menu} from "@components/Header/Header";
import { Artworks } from "@components/Artworks/Artworks";
import {Strip} from "@components/Strip/Strip";
import {useRouter} from "next/router";
import Head from "next/head";
import { query } from "@utils/query";

export default function ArtworksPage({artworks}) {
  const route = useRouter();
  const {type} = route.query;
  
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
        </Head>
        
        <main>
          <Header>
            <Menu />
          </Header>
          
          <Artworks artwork={artworks} type={type} />
        </main>
  
        <Strip text={'Swipe Down'} content={4} />
      </>
  )
}

ArtworksPage.getInitialProps = async ctx => {
  const res = await query({
    query: '{ artworks { post_id, type, image_src, title } }'
  })
  
  return {
    artworks: shuffle(res.data.artworks)
  }
}
