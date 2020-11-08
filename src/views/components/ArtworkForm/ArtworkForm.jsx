import React, { useState } from 'react';
import { UPLOADIMAGE } from "@gql/mutation/upload_image";
import { useMutation } from '@apollo/client';

const ArtworkForm = ({ artwork, onSubmit }) => {
  const [data, setData] = useState({});

  const [uploadImage] = useMutation(UPLOADIMAGE);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  const handleFileUpload = async ({
    target: {
      files: [file],
    },
  }) => {
    try {
      const {
        data: {
          upload_image: {
            filename
          }
        },
      } = await uploadImage({
        variables: {
          file,
        },
      });

      handleChange({
        target: {
          name: 'image_src',
          value: filename
        }
      });

      console.debug('파일 업로드 성공! ' + filename);
    } catch (e) {
      alert('파일 업로드에 실패했습니다 :(');
      console.error(e);
    }
  };


  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '0 20px',
      }}
    >
      <table
        style={{
          borderSpacing: '0 30px',
        }}
      >
        <thead>
          <tr>
            <th width="30%"></th>
            <th width="70%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>작품 분류</td>
            <td>
              <select
                name="type"
                defaultValue={artwork.type}
                onChange={handleChange}
              >
                <option value="photograpy">사진</option>
                <option value="poster">포스터</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>제목</td>
            <td>
              <input
                type="text"
                name="title"
                defaultValue={artwork.title}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>내용 설명</td>
            <td>
              <textarea
                name="summary"
                defaultValue={artwork.summary}
                onChange={handleChange}
                style={{
                  resize: 'vertical',
                }}
              />
            </td>
          </tr>
          <tr>
            <td>아트워크 파일</td>
            <td>
              <img
                src={data.image_src || artwork.image_src}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <input type="file" onChange={handleFileUpload} />
            </td>
          </tr>
          <tr>
            <td>작가 이름</td>
            <td>
              <input
                type="text"
                name="author"
                defaultValue={artwork.author.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>작가 설명</td>
            <td>
              <input
                type="text"
                name="position"
                defaultValue={artwork.author.position}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button type="submit">업로드</button>
    </form>
  );
};

export { ArtworkForm };
