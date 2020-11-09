import React, {useEffect, useState} from 'react';
import {getCookie, setCookie} from "@utils/cookie";
import {sha512} from "js-sha512";
import {useRouter} from "next/router";
import {LOGIN} from "@gql/query/Login";
import {useLazyQuery} from "@apollo/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      router.replace('/admin');
    }
  }, []);

  const handleChange = ({target}) => setFormData({
    ...formData,
    [target.name]: target.value
  });

  const [loginQuery, {
    data
  }] = useLazyQuery(LOGIN)

  useEffect(() => {
    if (data && !data.login) {
      alert('계정 정보를 찾을 수 없습니다.');
      return;
    }

    if (!data) {
      return
    }

    const { login } = data;

    const {accessToken, refreshToken} = login.token

    // 12시간
    setCookie("accessToken", accessToken, 60 * 60 * 12);
    // 7일
    setCookie("refreshToken", refreshToken, 60 * 60 * 24 * 7);

    router.push('/admin')
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = formData;

    loginQuery({
      variables: {
        input: {
          email,
          password: sha512(password)
        }
      }
    })
  }

  return (
      <>
        <div>
          <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                height: '100vh',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
          >
            <input
                type="email"
                name="email"
                placeholder="이메일"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '30px'
                }}
            />
            <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '30px'
                }}
            />
            <button type="submit">로그인하기</button>
          </form>
        </div>
      </>
  )
}
