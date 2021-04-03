import React from "react";
import {useRouter} from "next/router";
import {AdminHeader} from "@components/AdminHeader/AdminHeader";
import {ArtworkForm} from "@components/ArtworkForm/ArtworkForm";

const AddArtworkPage = ({artwork}) => {
  const router = useRouter();
  
  const handleSubmit = async (input) => {
    try {
      // const { data } = await addArtwork({
      //   variables: {
      //     input
      //   }
      // });
      
      alert(`새로운 작품이 추가되었습니다.`);
      
      // console.log(data);
      await router.replace("/admin");
    }
    catch (e) {
      console.error(e);
    }
  };
  
  return (
      <>
        <AdminHeader/>
        
        <ArtworkForm
            artwork={artwork}
            onSubmit={handleSubmit}
        />
      </>
  );
};

export default AddArtworkPage;
