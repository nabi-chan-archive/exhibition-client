import React from 'react';
import {Query} from "@apollo/client/react/components";
import {GET_ARTWORK} from "@graphql/query/GetArtwork";
import {Artwork as ArtworkType} from "@constants/types";
import classcat from "classcat";
import css from "@gql/ArtworkList/ArtworkList.module.scss";

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

export const Artwork: React.FC<ArtworkProps> = ({post_id, notFound, children}) => (
  <Query<Data, Variables> query={GET_ARTWORK} variables={{post_id}}>
    {({loading, error, data}) => {
      if (loading) {
        return (
          <div className={classcat([css.ArtworkList, css.loading])}>
            <h3>🚚 불러오는 중... 🚛</h3>
          </div>
        )
      }
      
      if (error) {
        return (
          <div className={classcat([css.ArtworkList, css.error])}>
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

