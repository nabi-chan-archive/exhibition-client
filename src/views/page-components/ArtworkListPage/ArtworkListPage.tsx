import React from "react";
import {Header} from "@components/Header/Header";
import {Menu} from "@components/Menu/Menu";
import {Strip} from "@components/Strip/Strip";
import Head from "next/head";
import {GetServerSideProps, NextPage} from "next";
import {Artwork} from "@constants/types";
import css from "./ArtworkListPage.module.scss";
import {ArtworkList} from "@components/ArtworkList/ArtworkList";
import axios from "axios";
import { API_PATH } from "@constants/api";

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
        
        <Strip text={"Swipe Down"} content={4}/>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  try {
    const { type } = query;
    
    if (type) {
      const { data } = await axios.get(`${API_PATH}/api/artworks/${type}`);
      
      return {
        props: {
          artworks: data
        }
      }
    }
  
    const { data } = await axios.get(`${API_PATH}/api/artworks`);
  
    return {
      props: {
        artworks: data
      }
    }
  } catch (e) {
    console.error(e.toJSON());
    
    return {
      redirect: {
        destination: "/"
      },
      props: {
        artworks: []
      }
    }
  }
}

export default ArtworkListPage;
