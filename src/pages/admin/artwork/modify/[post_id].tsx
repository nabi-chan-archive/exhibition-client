import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { ArtworkForm } from "@components/ArtworkForm/ArtworkForm";
// import { GETARTWORK } from '@graphql/query/artwork';
// import { REMOVEARTWORK } from "@graphql/mutation/RemoveArtwork";
// import { MODIFYARTWORK } from "@graphql/mutation/ModifyArtwork";
// import { useMutation } from '@apollo/client';
//
// const ModifyPostPage = ({ artwork, post_id }) => {
//   const router = useRouter();
//
//   const [modifyArtwork] = useMutation(MODIFYARTWORK);
//   const [removeArtwork] = useMutation(REMOVEARTWORK);
//
//   const handleSubmit = async (input) => {
//     try {
//       const {
//         data
//       } = await modifyArtwork({
//         variables: {
//           id: post_id,
//           input
//         }
//       });
//
//       alert(`${data.modify_artwork}개의 내용이 수정되었습니다.`);
//       await router.replace("/admin");
//     } catch (e) {
//       console.error(e)
//     }
//   }
//
//   if (artwork.type) {
//     return (
//       <>
//         <Head>
//           <title>아트워크 정보 수정</title>
//         </Head>
//
//         <div>
//           <h1 style={{ textAlign: "center" }}>아트워크 정보 수정</h1>
//
//           <ArtworkForm artwork={artwork} onSubmit={handleSubmit} />
//
//           <button onClick={handleDelete}>
//             삭제하기
//           </button>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Head>
//           <title>{post_id} 번 아트워크를 찾을 수 없습니다.</title>
//         </Head>
//
//         <div>
//         </div>
//       </>
//     )
//   }
// };
//
// export default ModifyPostPage;
