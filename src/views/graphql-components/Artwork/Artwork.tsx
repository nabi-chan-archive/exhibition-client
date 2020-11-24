import React from 'react';
import css from "./Artwork.module.scss";
import classcat from "classcat";
import {Artwork as ArtworkType} from "@constants/types";
import {Query} from "@apollo/client/react/components";
import {GET_ARTWORK} from "@graphql/query/GetArtwork";
import {errorWebHook} from '@utils/WebHook'

interface ArtworkProps {
  post_id: number;
  notFound: () => void;
  children: React.FC<Data>;
}

interface Data {
  artwork: ArtworkType
}

interface Variables {
  post_id: number;
}

export const Artwork: React.FC<ArtworkProps> = ({post_id, notFound, children}) => {
  if (!post_id) {
    return <div />
  }
  
  return (
    <Query<Data, Variables> query={GET_ARTWORK} variables={{post_id}}>
      {({loading, error, data}) => {
        if (loading) {
          return (
            <div className={classcat([css.Artwork, css.loading])}>
              <h3>🚚 불러오는 중... 🚛</h3>
            </div>
          )
        }
        
        if (error) {
          errorWebHook(error.toString(), error);
          
          return (
            <div className={classcat([css.Artwork, css.error])}>
              <h1>😱 이럴수가! 😱</h1>
              
              오류가 발생했습니다.
              
              <h3>{error.toString()}</h3>
            </div>
          )
        }
        
        if (!data.artwork) {
          notFound();
          
          return (
            <div/>
          );
        }
        
        return children(data);
      }}
    </Query>
  )
}
