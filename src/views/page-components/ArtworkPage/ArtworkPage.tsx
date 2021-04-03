import React from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {Header} from "@components/Header/Header";
import {BackLink} from "@components/BackLink/BackLink";
import {ArtworkInfo} from "@components/ArtworkInfo/ArtworkInfo";
import {ArtworkBody} from "@components/ArtworkBody/ArtworkBody";
import {Strip} from "@components/Strip/Strip";

interface ArtworkPageProps {
  post_id: number;
}

const ArtworkPage: NextPage<ArtworkPageProps> = ({post_id}) => {
  const router = useRouter();
  
  const handleNotFound = async () => {
    alert("아트워크를 찾을 수 없습니다 😅");
    await router.replace("/artworks");
  };
  
  return (
      <main>
        <Header isArtwork>
          <BackLink/>
          {/*<ArtworkInfo data={artwork}/>*/}
        </Header>
        
        {/*<ArtworkBody data={artwork}/>*/}
        
        <Strip text="Scroll Down" content={4}/>
      </main>
  );
};

// ArtworkPage.getInitialProps = async ({query}) => {
//   const {post_id} = query;
//
//   return {
//     post_id: parseInt(post_id as string)
//   }
// }

export default ArtworkPage;
