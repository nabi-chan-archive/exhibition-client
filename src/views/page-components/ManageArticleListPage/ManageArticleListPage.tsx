import React from 'react';
import css from './ManageArticleListPage.module.scss';
import Head from "next/head";
import {AdminHeader} from '@components/AdminHeader/AdminHeader';
import {ArtworkList} from "@gql/ArtworkList/ArtworkList";
import Link from "next/link";

interface ManageArticleListPageProps {
}

const ManageArticleListPage: React.FC<ManageArticleListPageProps> = () => {
  return (
    <>
      <Head>
        <title>20`21 웹 아카이브전 무균전시 : 대시보드</title>
      </Head>
      
      <div className={css.ManageArticleListPage}>
        <AdminHeader/>
        
        <article>
          <ArtworkList>
            {({artworks}) => (
              <table className={css.table}>
                <thead>
                <tr>
                  <th>번호</th>
                  <th>작품 분류</th>
                  <th>제목</th>
                  <th>작가</th>
                  <th>작품</th>
                  <th>관리</th>
                </tr>
                </thead>
                <tbody>
                {artworks.map((artwork) => (
                  <tr key={artwork.post_id}>
                    <td>{artwork.post_id}</td>
                    <td>{artwork.type}</td>
                    <td>{artwork.title}</td>
                    <td>{artwork.author.name}</td>
                    <td><img src={artwork.image_src} alt=""/></td>
                    <td>
                      <ul>
                        <li>
                          <Link href={`/admin/artwork/modify/${artwork.post_id}`}>
                            <a>
                              수정하기
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/admin/artwork/remove/${artwork.post_id}`}>
                            <a>
                              삭제하기
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            )}
          </ArtworkList>
        </article>
      </div>
    </>
  )
    ;
}

export default ManageArticleListPage;
