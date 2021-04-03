import React from "react";
import {NextPage} from "next";
import {AdminHeader} from "@components/AdminHeader/AdminHeader";
import {ArtworkForm} from "@components/ArtworkForm/ArtworkForm";
import {Artwork as ArtworkType} from "@constants/types";
import {useRouter} from "next/router";

interface ModifyArtworkPageProps {
  post_id: number;
}

const ModifyArtworkPage: NextPage<ModifyArtworkPageProps> = ({post_id}) => {
  const router = useRouter();
  
  // const [modifyArtwork] = useMutation(MODIFY_ARTWORK);
  // const [removeArtwork] = useMutation(REMOVE_ARTWORK);
  
  const handleSubmit = async (input: ArtworkType) => {
    if (!input) {
      alert("변경된 사항이 없습니다!");
      return;
    }
    
    try {
      // const {
      //   data
      // } = await modifyArtwork({
      //   variables: {
      //     id: post_id,
      //     input
      //   }
      // });
      
      // alert(`${data.modify_artwork}개의 내용이 수정되었습니다.`);
      await router.replace("/admin");
    }
    catch (e) {
      alert("아트워크를 수정하던 도중 오류가 발생했습니다.");
      console.error(e);
    }
  };
  
  const handleRemove: ({title, author}) => Promise<any> = async ({title, author}) => {
    const check = confirm(`정말로 ${title} - ${author.name}를 삭제 하시겠습니까?`);
    
    if (!check) return;
    
    try {
      // const {
      //   data
      // } = await removeArtwork({
      //   variables: {
      //     id: post_id,
      //   }
      // });
      
      alert(`아트워크가 삭제되었습니다.`);
      await router.replace("/admin");
    }
    catch (e) {
      alert("아트워크를 삭제하던 도중 오류가 발생했습니다.");
      console.error(e);
    }
  };
  
  const handleNotFound = async () => {
    alert("아트워크를 찾을 수 없습니다 😅");
    await router.replace("/artworks");
  };
  
  return (
      <>
        <AdminHeader/>
        {/*<ArtworkForm*/}
        {/*    artwork={artwork}*/}
        {/*    onSubmit={handleSubmit}*/}
        {/*>*/}
        {/*  <button type="reset" onClick={() => handleRemove(artwork)}>*/}
        {/*    삭제하기*/}
        {/*  </button>*/}
        {/*</ArtworkForm>*/}
      </>
  );
};

ModifyArtworkPage.getInitialProps = async ({query}) => {
  return {
    post_id: parseInt(query.post_id as string),
  };
};

export default ModifyArtworkPage;
