import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { query } from "@utils/query";
import { ArtworkForm } from "@components/ArtworkForm/ArtworkForm";

const ModifyPostPage = ({ artwork, post_id }) => {
  const router = useRouter();

  useEffect(() => {
    if (!artwork) {
      alert("작품을 찾을 수 없습니다!");
      router.replace("/admin");
    }
  }, []);
    
    
  console.log(artwork)

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

ModifyPostPage.getInitialProps = async (ctx) => {
  const { post_id } = ctx.query;

  const { data } = await query({
    query: `{
              artwork(id: ${post_id}) {
                  type
                  title
                  summary
                  published
                  image_src
                  author {
                      name
                      position
                  }
              }
          }`,
  });

  return {
    artwork: data.artwork,
    post_id,
  };
};

export default ModifyPostPage;
