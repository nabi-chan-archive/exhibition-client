import React, {useEffect} from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import {createApolloClient} from "@graphql/client";
import {useMutation} from "@apollo/client";
import {GET_ARTWORK} from "@graphql/query/GetArtwork";
import {REMOVE_ARTWORK} from "@graphql/mutation/RemoveArtwork";
import {Artwork} from "@constants/types";

interface ArtworkRemovePageProps {
  artwork: Artwork;
  post_id: number;
}

const ArtworkRemovePage: NextPage<ArtworkRemovePageProps> = ({artwork, post_id}) => {
  const route = useRouter();
  const [removeArtwork] = useMutation(REMOVE_ARTWORK);
  
  useEffect(() => {
    const check = confirm(`정말로 ${artwork.title} - ${artwork.author.name}를 삭제 하시겠습니까?`);
    if (!check) return;
    
    removeArtwork({
      variables: {
        id: post_id,
      }
    }).then(() => {
      alert('삭제 완료!');
    }).catch((error) => {
      alert('삭제하는 과정에서 오류가 발생했습니다.');
      console.error(error);
    })
    
    route
      .push('/admin')
      .then(() => console.log('redirect complete'));
  }, []);
  
  return (
    <div/>
  );
}

ArtworkRemovePage.getInitialProps = async ({query}) => {
  const post_id = parseInt(query.post_id as string);
  const client = createApolloClient({});
  
  const {
    data: {artwork}
  } = await client.query({
    query: GET_ARTWORK,
    variables: {
      post_id,
    },
  })
  
  return {
    artwork,
    post_id
  }
}

export default ArtworkRemovePage;