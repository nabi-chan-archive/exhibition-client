import React, {useEffect} from "react";
import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import {Artwork} from "@constants/types";
import axios from "axios";
import {API_PATH} from "@constants/api";
import {getCookie} from "@utils/cookie";

interface ArtworkRemovePageProps {
  artwork: Artwork;
  post_id: number;
}

const ArtworkRemovePage: NextPage<ArtworkRemovePageProps> = ({artwork, post_id}) => {
  const route = useRouter();
  
  useEffect(() => {
    const check = confirm(`정말로 ${artwork.title} - ${artwork.author}를 삭제 하시겠습니까?`);
    if (!check) return;
    
    const result = axios({
      method: "DELETE",
      url: `${API_PATH}/api/artwork/${post_id}`,
      headers: {
        "accessToken": getCookie("accessToken")
      }
    });
    
    result.then(() => {
      alert("삭제에 성공했습니다.");
      route.push("/admin").then(() => console.log("redirect complete"));
    }).catch((e) => {
      console.log(e.toString())
      alert("삭제에 실패했습니다.");
    });
  }, []);
  
  return (
      <div/>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { post_id } = query;
    
    const { data } = await axios.get(`${API_PATH}/api/artwork/${post_id}`);
    
    return {
      props: {
        artwork: data,
        post_id,
      }
    }
  } catch (e) {
    return {
      props: {
        artwork: {},
        post_id: 0,
      }
    }
  }
}

export default ArtworkRemovePage;
