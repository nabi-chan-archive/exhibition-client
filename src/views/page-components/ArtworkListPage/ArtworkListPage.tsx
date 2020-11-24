import React from 'react'
import {Header} from "@components/Header/Header";
import {Menu} from "@components/Menu/Menu";
import {Strip} from "@components/Strip/Strip";
import Head from "next/head";
import {NextPage} from "next";
import {Artwork} from "@constants/types";
import {createApolloClient} from "@graphql/client";
import {GET_ARTWORK_LIST} from "@graphql/query/GetArtworkList";
import css from './ArtworkListPage.module.scss';
import {ArtworkList} from "@components/ArtworkList/ArtworkList";

interface ArtworkListPageProps {
  artworks: Artwork[];
}

const ArtworkListPage: NextPage<ArtworkListPageProps> = ({artworks}) => {
  return (
    <>
      <main className={css.ArtworkListPage}>
        <Header>
          <Menu/>
        </Header>
        
        <article className={css.artworkList}>
          {artworks ? <ArtworkList artworks={artworks}/> : null}
          {!artworks && (
            <div className={css.notFound}>
              🚧 준비 중입니다. 🏗
            </div>
          )}
        </article>
      </main>
      
      <Strip text={'Swipe Down'} content={4}/>
    </>
  )
};

ArtworkListPage.getInitialProps = async ({res, query: {type}}) => {
  const client = createApolloClient({});
  const typeRegex = /(poster|photography|undefined)/;
  
  if (type && !typeRegex.test(type as string)) {
    type = undefined;
    res.writeHead(302, {
      Location: '/artworks'
    });
    res.end();
  }
  
  const {data: {artworks}} = await client.query({
    query: GET_ARTWORK_LIST,
    variables: {
      type
    }
  });
  
  return {
    artworks: artworks.slice().sort(() => Math.random() - 0.5)
  };
};

export default ArtworkListPage;
