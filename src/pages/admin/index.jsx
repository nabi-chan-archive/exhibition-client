import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getCookie } from "@utils/cookie";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { GETARTWORKS } from '@gql/query/artwork';

export default function AdminHomePage({ artworks }) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      router.replace("/admin/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>20`21 웹 아카이브전 무균전시 : 대시보드</title>
        <NextSeo noindex={true} />
      </Head>

      <div>
        <h1 style={{margin: "30px 0", textAlign: 'center'}}>아트워크 관리하기</h1>
        <table style={{ width: "100%", textAlign: "center" , borderSpacing: "20px"}}>
          <thead>
            <tr style={{position: "sticky", top: 0, left: 0, right: 0}}>
              <th width="5%">글 번호</th>
              <th width="10%">작품 분류</th>
              <th width="35%">제목</th>
              <th width="10%">작가</th>
              <th width="30%">작품</th>
              <th width="10%"></th>
            </tr>
          </thead>

          <tbody>
            {artworks.map((_i) => (
              <tr key={_i.post_id}>
                <td>{_i.post_id}</td>
                <td>{_i.type}</td>
                <td>{_i.title}</td>
                <td>{_i.author.name}</td>
                <td>
                  <img src={_i.image_src} alt={_i.title} style={{width: "50%"}} />
                </td>
                <td style={{textAlign: 'center'}}>
                  <Link href={`/admin/artwork/modify/${_i.post_id}`}>
                    관리하기
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

AdminHomePage.getInitialProps = async ({ apolloClient }) => {
  const {
    data: { artworks },
  } = await apolloClient.query({
    query: GETARTWORKS,
  });

  return {
    artworks,
  };
};
