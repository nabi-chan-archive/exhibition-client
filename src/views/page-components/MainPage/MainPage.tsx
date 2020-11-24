import React from 'react';
import Head from 'next/head';
import css from './MainPage.module.scss';
import {NextPage} from 'next'
import {Header} from '@components/Header/Header';
import {Menu} from "@components/Menu/Menu";
import {Strip} from '@components/Strip/Strip';

interface MainPageProps {
}

const MainPage: NextPage<MainPageProps> = () => {
  return (
    <>
      <Head>
        <title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
      </Head>
      
      <main className={css.MainPage}>
        <Header>
          <Menu/>
        </Header>
        
        <video className={css.video} autoPlay muted loop>
          <source src="https://d2glkkoidqjuti.cloudfront.net/POSTER.mp4" type="video/mp4"/>
          해당 브라우저에서는 video 태그를 지원하지 않습니다.
        </video>
      </main>
      
      <Strip text={'20`21 Web Archive Exhibition 무균전시 - Exhibition of STERILE'} content={1}/>
    </>
  );
}

export default MainPage;
