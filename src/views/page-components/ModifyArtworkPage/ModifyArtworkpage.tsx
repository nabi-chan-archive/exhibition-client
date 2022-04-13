import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {AdminHeader} from "@components/AdminHeader/AdminHeader";
import {ArtworkForm} from "@components/ArtworkForm/ArtworkForm";
import {Artwork as ArtworkType} from "@constants/types";
import {useRouter} from "next/router";
import axios from "axios";
import {API_PATH} from "@constants/api";
import {getCookie} from "@utils/cookie";

interface ModifyArtworkPageProps {
  artwork: ArtworkType
  post_id: number;
  env: {
    [key: string]: string
  }
}

const ModifyArtworkPage: NextPage<ModifyArtworkPageProps> = ({artwork, post_id, env}) => {
  const router = useRouter();
  
  const handleSubmit = async (input: ArtworkType) => {
    if (!input) {
      alert("변경된 사항이 없습니다!");
      return;
    }
    
    try {
      const result = axios({
        method: "PUT",
        url: `${API_PATH}/api/artwork/${post_id}`,
        headers: {
          "accessToken": getCookie("accessToken")
        },
        data: input
      });
  
      result.then(() => {
        alert("수정에 성공했습니다.");
      }).catch((e) => {
        console.log(e.toString())
        alert("수정에 실패했습니다.");
      });
      
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
      const result = axios({
        method: "DELETE",
        url: `${API_PATH}/api/artwork/${post_id}`,
        headers: {
          "accessToken": getCookie("accessToken")
        }
      });
  
      result.then(() => {
        alert("삭제에 성공했습니다.");
        router.replace("/admin");
      }).catch((e) => {
        console.log(e.toString())
        alert("삭제에 실패했습니다.");
      });
    }
    catch (e) {
      alert("아트워크를 삭제하던 도중 오류가 발생했습니다.");
      console.error(e);
    }
  };
  
  return (
      <>
        <AdminHeader/>
        <ArtworkForm
            env={env}
            artwork={artwork}
            onSubmit={handleSubmit}
        >
          <button type="reset" onClick={() => handleRemove(artwork)}>
            삭제하기
          </button>
        </ArtworkForm>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { data } = await axios.get(`${API_PATH}/api/artwork/${query.post_id}`);
    
    return {
      props: {
        post_id: query.post_id,
        artwork: data,
        env: JSON.stringify(process.env)
      }
    }
  } catch (e) {
    return {
      props: {
        post_id: 0,
        artwork: {},
        env: {}
      }
    }
  }
}

export default ModifyArtworkPage;
