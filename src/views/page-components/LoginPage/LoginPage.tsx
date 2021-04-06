import React, {useCallback, useEffect, useRef} from "react";
import css from "./LoginPage.module.scss";
import {useRouter} from "next/router";
import {setCookie} from "@utils/cookie";
import {sha512} from "js-sha512";
import axios from "axios";
import {API_PATH} from "@constants/api";

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const router = useRouter();
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      const { data } = await axios({
        method: "POST",
        url: `${API_PATH}/api/admin/login`,
        data: {
          email,
          password,
        }
      });
      
      setCookie("accessToken", data.accessToken, 60 * 60 * 12);
      
      await router.push("/admin");
    } catch (e) {
      console.log(e);
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  }, [emailRef, passwordRef]);
  
  return (
      <form onSubmit={handleSubmit} className={css.LoginPage}>
        <input
            type="email"
            ref={emailRef}
            className={css.input}
            placeholder="email"
            required/>
        
        <input
            type="password"
            ref={passwordRef}
            className={css.input}
            placeholder="password"
            required/>
        
        <button>
          로그인
        </button>
      </form>
  );
};

export default LoginPage;
