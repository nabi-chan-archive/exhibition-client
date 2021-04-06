import React from "react";
import {useRouter} from "next/router";
import {AdminHeader} from "@components/AdminHeader/AdminHeader";
import {ArtworkForm} from "@components/ArtworkForm/ArtworkForm";
import axios from "axios";
import {API_PATH} from "@constants/api";
import {getCookie} from "@utils/cookie";

const AddArtworkPage = ({artwork}) => {
  const router = useRouter();
  
  const handleSubmit = async (input) => {
    try {
      await axios({
        method: "POST",
        url: `${API_PATH}/api/artwork/create`,
        data: input,
        headers: {
          "accessToken": getCookie("accessToken")
        }
      });
      
      alert(`새로운 작품이 추가되었습니다.`);
      
      // console.log(data);
      await router.replace("/admin");
    }
    catch (e) {
      console.error(e);
      alert("작품을 추가하는 중 오류가 발생했습니다.");
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
