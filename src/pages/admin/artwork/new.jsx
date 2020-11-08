import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import {ArtworkForm} from "@components/ArtworkForm/ArtworkForm";
import {ADDARTWORK} from "@gql/mutation/AddArtwork";
import {useMutation} from '@apollo/client';

const ModifyPostPage = () => {
	const router = useRouter();

	const [addArtwork] = useMutation(ADDARTWORK);

	const handleSubmit = async (input) => {
		try {
			const { data } = await addArtwork({
				variables: {
					input
				}
			});

			alert(`새로운 작품이 추가되었습니다.`);

			console.log(data);
			await router.replace("/admin");
		} catch (e) {
			console.error(e)
		}
	}

	return (
			<>
				<Head>
					<title>아트워크 추가하기</title>
				</Head>

				<div>
					<h1 style={{textAlign: "center"}}>아트워크 추가하기</h1>

					<ArtworkForm onSubmit={handleSubmit}/>
				</div>
			</>
	);
};

export default ModifyPostPage;
