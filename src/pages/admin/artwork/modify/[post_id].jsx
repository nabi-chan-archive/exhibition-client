import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ArtworkForm } from "@components/ArtworkForm/ArtworkForm";
import { GETARTWORK } from '@gql/query/artwork';

const ModifyPostPage = ({ artwork, post_id }) => {
  const router = useRouter();

  useEffect(() => {
    if (!artwork) {
      alert("작품을 찾을 수 없습니다!");
      router.replace("/admin");
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>{post_id} 번 아트워크 수정</title>
      </Head>

      <div>
        <h1 style={{ textAlign: "center" }}>{post_id} 번 아트워크 수정</h1>

        <ArtworkForm artwork={artwork} onSubmit={(e) => console.log(e)} />
      </div>
    </>
  );
};

ModifyPostPage.getInitialProps = async ({ query, apolloClient }) => {
  const { post_id } = query;

  const {
    data: { artwork },
  } = await apolloClient.query({
    query: GETARTWORK,
    variables: {
      post_id,
    },
  });

  return {
    artwork,
    post_id,
  };
};

export default ModifyPostPage;
