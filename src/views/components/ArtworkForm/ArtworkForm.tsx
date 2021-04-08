import React, {useState} from 'react';
import classcat from 'classcat';
import css from './ArtworkForm.module.scss';
import {useRouter} from 'next/router';
import {Artwork} from "@constants/types";
import aws from "aws-sdk";

interface ArtworkFormProps {
  artwork?: Artwork;
  onSubmit: (e) => void;
  children?: JSX.Element | JSX.Element[];
  env: {
    [key: string]: string
  }
}

const ArtworkForm: React.FC<ArtworkFormProps> = ({artwork, onSubmit, children,  env}) => {
  const [data, setData] = useState<Artwork>(artwork);
  const [uploadFrom, setUploadFrom] = useState<"google" | "upload" | "link">("upload");
  
  const route = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  
  const handleChange = async ({target}) => {
    let {name, value, type, checked, files} = target;
    
    if (type === "checkbox") {
      setData({
        ...data,
        video: checked
      })
      return;
    }
    
    // file upload
    if (files) {
      try {
        const {S3_ACCESS_KEY, S3_SECRET_KEY, BUCKET_REGION, BUCKET_NAME, BUCKET_URL, CLOUDFRONT_URL} = env;
        
        aws.config.update({
          accessKeyId: S3_ACCESS_KEY,
          secretAccessKey: S3_SECRET_KEY,
          region: BUCKET_REGION,
        })
        
        const bucket = new aws.S3();
  
        const [name, type] = files[0].name.split('.');
        const params = {
          Bucket: BUCKET_NAME,
          Key: `${new Date().getTime()}_${name}.${type}`,
          Body: files[0],
          ContentType: files[0].type,
          ACL: 'public-read',
        };
        
        const file = await bucket.upload(params, (error, data) => {
          console.log(error);
          console.log(data)
        }).promise();
        
        const filepath = file.Location.replace(BUCKET_URL, CLOUDFRONT_URL);
        
        console.debug('파일 업로드 성공! ' + filepath);
  
        setData({
          ...data,
          image_src: filepath,
          video: files[0].type.split('/')[0] === "video"
        })
      } catch (e) {
        if (e.toString().includes("401")) {
          alert('로그인되지 않았습니다.\n다시 로그인해주세요.');
          await route.replace('/admin/login');
          return;
        }
        
        if (e.toString().includes("413")) {
          alert('파일의 크기가 너무 큽니다.');
          return;
        }
  
        if (e.toString().includes("Inaccessible host")) {
          alert('AWS S3에 연결할 수 없습니다.');
          return;
        }
        
        alert('파일 업로드에 실패했습니다.');
        console.error(e);
      }
      
      return;
    }
    
    // google link set
    if (name === 'image_src' && uploadFrom === 'google') {
      value = `https://drive.google.com/uc?export=view&id=${value}`
    }
    
    // default (text)
    setData({
      ...data,
      [name]: value
    })
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className={css.ArtworkForm}>
      <table className={css.table}>
        <tbody>
        <tr>
          <td>작품 분류</td>
          <td>
            <select
              name="type"
              onChange={handleChange}
              defaultValue={artwork?.type}
              required>
              <option value="" defaultChecked hidden>분류를 선택하세요.</option>
              <option value="photography">사진</option>
              <option value="poster">포스터</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>제목</td>
          <td>
            <input
              name="title"
              type="text"
              maxLength={100}
              defaultValue={artwork?.title}
              placeholder="작품의 제목을 입력하세요."
              onChange={handleChange}
              required/>
          </td>
        </tr>
        <tr>
          <td>설명</td>
          <td>
            <textarea
              name="summary"
              maxLength={3000}
              defaultValue={artwork?.summary}
              placeholder="작품의 설명을 입력하세요."
              onChange={handleChange}
              required/>
          </td>
        </tr>
        <tr>
          <td>
            아트워크 업로드
          </td>
          <td className={css.fileUpload}>
            <div className={css.btnWrap}>
              <span
                className={classcat([css.button, uploadFrom === "upload" && css.current])}
                onClick={() => setUploadFrom("upload")}>
                서버에 업로드
              </span>
              
              <span
                className={classcat([css.button, uploadFrom === "google" && css.current])}
                onClick={() => setUploadFrom("google")}>
                구글 드라이브
              </span>
              
              <span
                className={classcat([css.button, uploadFrom === "link" && css.current])}
                onClick={() => setUploadFrom("link")}>
                파일 주소
              </span>
            </div>
            
            <div>
              {data?.video || artwork?.video ? (
                  <video controls muted loop className={css.preview}>
                    <source src={data?.image_src || artwork?.image_src} type="video/mp4" />
                  </video>
              ) : (
                  <img className={css.preview} src={data?.image_src || artwork?.image_src} alt="이미지를 찾을 수 없습니다."/>
              )}
            </div>
            
            <div className={css.uploadWrap}>
              {uploadFrom === "upload" ? <input
                name="image_src"
                onChange={handleChange}
                type="file"/> : null}
              
              {uploadFrom === "google" ? <input
                type="text"
                name="image_src"
                onChange={handleChange}
                placeholder="파일의 아이디를 입력해주세요."
                required/> : null}
              
              {uploadFrom === "link" ? <input
                onChange={handleChange}
                name="image_src"
                defaultValue={artwork?.image_src}
                maxLength={500}
                placeholder="이미지 주소를 입력하세요."
                type="text"/> : null}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            작가 이름
          </td>
          <td>
            <input
              name="author"
              defaultValue={artwork?.author}
              placeholder="작가의 이름을 적어주세요."
              maxLength={30}
              onChange={handleChange}
              type="text"
              required/>
          </td>
        </tr>
        <tr>
          <td>
            작가 소개
          </td>
          <td>
            <input
              name="position"
              defaultValue={artwork?.position}
              placeholder="작가를 짧게 설명해주세요."
              maxLength={50}
              onChange={handleChange}
              type="text"/>
          </td>
        </tr>
        <tr>
          <td>
            모션포스터
          </td>
          <td>
            <input name="video" checked={data?.video} onChange={handleChange} type="checkbox"/>
          </td>
        </tr>
        </tbody>
      </table>
      
      <div className={css.buttonWrap}>
        <button type="submit">
          저장하기
        </button>
        
        {children}
      </div>
    </form>
  );
};

export {ArtworkForm};
