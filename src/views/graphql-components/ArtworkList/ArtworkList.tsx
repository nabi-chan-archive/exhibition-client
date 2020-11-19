import React from 'react';
import css from './ArtworkList.module.scss';
import classcat from "classcat";
import {Artwork, ArtworkType} from "@constants/types";
import {Query} from "@apollo/client/react/components";
import {GET_ARTWORK_LIST} from '@graphql/query/GetArtworkList';

interface ArtworkListProps {
  type?: ArtworkType;
  children: React.FC<Data>;
}

interface Data {
  artworks: Artwork[]
}

interface Variables {
  type?: ArtworkType
}

export const ArtworkList : React.FC<ArtworkListProps> = ({type, children}) => (
  <Query<Data, Variables> query={GET_ARTWORK_LIST} variables={{type: type}}>
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
      
      if (!data.artworks.length) {
        return (
          <div className={classcat([css.ArtworkList, css.null])}>
            🚧 준비 중입니다. 🏗
          </div>
        )
      }
      
      return children(data);
    }}
  </Query>
);
