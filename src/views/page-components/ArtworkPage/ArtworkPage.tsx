import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Header} from "@components/Header/Header";
import {BackLink} from "@components/BackLink/BackLink";
import {ArtworkInfo} from "@components/ArtworkInfo/ArtworkInfo";
import {ArtworkBody} from "@components/ArtworkBody/ArtworkBody";
import {Strip} from "@components/Strip/Strip";
import axios from "axios";
import {API_PATH} from "@constants/api";
import {Artwork} from "@constants/types";

interface ArtworkPageProps {
  artwork: Artwork
}

const ArtworkPage: NextPage<ArtworkPageProps> = ({ artwork }) => {
  return (
      <main>
        <Header isArtwork>
          <BackLink/>
          <ArtworkInfo data={artwork}/>
        </Header>
        
        <ArtworkBody data={artwork}/>
        
        <Strip text="Scroll Down" content={4}/>
      </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await axios.get(`${API_PATH}/api/artwork/${query.post_id}`);
    return {
      props: {
        artwork: data
      }
    }
  } catch (e) {
    console.error(e.toJSON());
    return {
      redirect: {
        destination: "/"
      },
      props: {
        artwork: {}
      }
    }
  }
}

export default ArtworkPage;
