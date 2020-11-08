import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ArtworkForm } from "@components/ArtworkForm/ArtworkForm";
import { GETARTWORK } from '@gql/query/artwork';
import { REMOVEARTWORK } from "@gql/mutation/RemoveArtwork";
import { MODIFYARTWORK } from "@gql/mutation/ModifyArtwork";
import { useMutation } from '@apollo/client';

const ModifyPostPage = ({ artwork, post_id }) => {
  const router = useRouter();

  const [modifyArtwork] = useMutation(MODIFYARTWORK);
  const [removeArtwork] = useMutation(REMOVEARTWORK);

  const handleSubmit = async (input) => {
    try {
      const {
        data
      } = await modifyArtwork({
        variables: {
          id: post_id,
          input
        }
      });

      alert(`${data.modify_artwork}개의 내용이 수정되었습니다.`);
      await router.replace("/admin");
    } catch (e) {
      console.error(e)
    }
  }

  const handleDelete = async () => {
    const check = confirm(`정말로 ${artwork.title}를 삭제하시겠습니까?`);

    if (!check) return

    try {
      const {
        data
      } = await removeArtwork({
        variables: {
          id: post_id,
        }
      });

      alert(`아트워크가 삭제되었습니다.`);
      await router.replace("/admin");
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!artwork.type) {
      alert("작품을 찾을 수 없습니다!");
      router.replace("/admin");
    }
  }, [post_id]);

  if (artwork.type) {
    return (
      <>
        <Head>
          <title>아트워크 정보 수정</title>
        </Head>

        <div>
          <h1 style={{ textAlign: "center" }}>아트워크 정보 수정</h1>

          <ArtworkForm artwork={artwork} onSubmit={handleSubmit} />

          <button onClick={handleDelete}>
            삭제하기
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{post_id} 번 아트워크를 찾을 수 없습니다.</title>
        </Head>

        <div>
        </div>
      </>
    )
  }
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
