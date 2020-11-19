import React from 'react';
import css from './UserList.module.scss';
import classcat from "classcat";
import {User} from "@constants/types";
import {Query} from "@apollo/client/react/components";
import {GET_USER_LIST} from '@graphql/query/GetUserList';

interface UserListProps {
  children: React.FC<Data>;
}

interface Data {
  get_users: User[]
}

interface Variables {
}

export const UserList : React.FC<UserListProps> = ({ children}) => (
  <Query<Data, Variables> query={GET_USER_LIST}>
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
      
      return children(data);
    }}
  </Query>
);
