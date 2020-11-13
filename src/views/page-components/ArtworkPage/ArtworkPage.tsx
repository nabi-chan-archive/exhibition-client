import React from 'react';
import {NextPage} from "next";
import {Artwork} from "@gql/Artwork/Artwork";
import {useRouter} from "next/router";
import {Header} from "@components/Header/Header";

interface ArtworkPageProps {
  post_id: number;
}

const ArtworkPage: NextPage<ArtworkPageProps> = ({post_id}) => {
  const router = useRouter();
  
  const handleNotFound = async () => {
    alert('아트워크를 찾을 수 없습니다 😅');
    await router.replace('/artworks');
  }
  
  return (
    <Artwork post_id={post_id} notFound={handleNotFound}>
      {({artwork}) => (
        <main>
          <Header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores est iste iusto magni modi necessitatibus neque quos ratione totam. Ab aliquam blanditiis cumque dignissimos dolores ea earum error excepturi fugit, in magnam molestiae natus necessitatibus
          </Header>
          
          <article>
            {JSON.stringify(artwork)}
          </article>
        </main>
      )}
    </Artwork>
  );
};

ArtworkPage.getInitialProps = async ({query}) => {
  const {post_id} = query;
  
  return {
    post_id: parseInt(post_id as string)
  }
}

export default ArtworkPage;
