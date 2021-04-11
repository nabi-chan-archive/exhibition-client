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
  
        <img
            className={css.video}
            src="https://d2glkkoidqjuti.cloudfront.net/poster.jpeg"
            alt="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛"
        />
      </main>
      
      <Strip text={'20`21 Web Archive Exhibition 무균전시 - Exhibition of STERILE'} content={1}/>
    </>
  );
}

export default MainPage;
