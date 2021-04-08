import React from "react";
import Head from "next/head";
import Link from "next/link";
import css from "./ManageArticleListPage.module.scss";
import {AdminHeader} from "@components/AdminHeader/AdminHeader";
import {Artwork} from "@constants/types";
import {GetServerSideProps} from "next";
import {API_PATH} from "@constants/api";
import axios from "axios";

interface ManageArticleListPageProps {
  artworks: Artwork[];
}

const ManageArticleListPage: React.FC<ManageArticleListPageProps> = ({ artworks }) => {
  return (
      <>
        <Head>
          <title>20`21 웹 아카이브전 무균전시 : 대시보드</title>
        </Head>
        
        <div className={css.ManageArticleListPage}>
          <AdminHeader/>
          
          <article>
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
                    <td>{artwork.author}</td>
                    <td>{
                      artwork.video ? (
                          <video controls muted loop className={css.preview}>
                            <source src={artwork?.image_src} type="video/mp4" />
                          </video>
                      ) : (
                          <img src={artwork.image_src} alt=""/>
                      )
                    }</td>
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
          </article>
        </div>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const { data } = await axios.get(`${API_PATH}/api/artworks`);
    
    return {
      props: {
        artworks: data
      }
    }
  } catch (e) {
    return {
      props: {
        artworks: []
      }
    }
  }
}

export default ManageArticleListPage;
