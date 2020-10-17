import React from 'react'
import {shuffle} from "@utils/utils";
import {Header, Menu} from "@components/Header/Header";
import { Artworks } from "@components/Artworks/Artworks";
import {Strip} from "@components/Strip/Strip";
import {useRouter} from "next/router";
import Head from "next/head";

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
  return {
    artworks: shuffle([
      {
        id: 1,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 2,
        type: 'poster',
        img_src: 'http://placehold.it/300x400',
        title: 'test'
      },
      {
        id: 3,
        type: 'poster',
        img_src: 'http://placehold.it/300x400',
        title: 'test'
      },
      {
        id: 4,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 5,
        type: 'poster',
        img_src: 'http://placehold.it/300x400',
        title: 'test'
      },
      {
        id: 6,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 7,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 8,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 9,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 10,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 11,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 12,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      },
      {
        id: 13,
        type: 'photography',
        img_src: 'http://placehold.it/1920x1080',
        title: 'test'
      }
    ])
  }
}
