import React from 'react'
import {shuffle} from "@utils/utils";
import {Header, Menu} from "@components/Header/Header";
import {Artworks} from "@components/Artworks/Artworks";
import {Strip} from "@components/Strip/Strip";
import {useRouter} from "next/router";
import Head from "next/head";
import {GETARTWORKS} from "@gql/query/artwork";

export default function ArtworksPage({artworks}) {
	const route = useRouter();
	const {type} = route.query;

	return (
			<>
				<Head>
					<title>20`21 웹 아카이브전 무균전시 : 새 시대 새 빛</title>
				</Head>

				<main className="list">
					<Header>
						<Menu/>
					</Header>

					{artworks.length ? <Artworks artwork={artworks} type={type}/> : <h1>아트워크가 없습니다.</h1>}
				</main>

				<Strip text={'Swipe Down'} content={4}/>
			</>
	)
}

ArtworksPage.getInitialProps = async ({apolloClient}) => {
	const {
		data: { artworks },
	} = await apolloClient.query({
		query: GETARTWORKS,
	});

	return {
		artworks: shuffle(artworks)
	}
}