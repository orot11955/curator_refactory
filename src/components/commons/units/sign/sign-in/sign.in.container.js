import SignInUI from "./sign.in.presenter"
import axios from 'axios'
import jwt from 'jsonwebtoken'; // jwt
import Router, { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import * as C from './sign.in.styles'
import Link from 'next/link'
import { Cookies, useCookies } from 'react-cookie'  // cookie 
import { useState, useCallback  } from 'react';

export default function SignIn(props) {

  const back = process.env.NEXT_PUBLIC_URI
  const [iconEmail, setIconEmail] = useState(false);
  const [iconPw, setIconPw] = useState(false);

   // router, cookie 객체
   const router = useRouter();
   const [cookies, setCookie] = useCookies();
 
   // 입력 state
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   // 출력 message
   const [emailMsg, setEmailMsg] = useState("");
   const [pwdMsg, setPwdMsg] = useState('');
 
   // 유효성 검증
   const validateEmail = (email) => {
     return email
       .toLowerCase()
       .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
   };
 
   const validatePwd = (password) => {
     return password
       .toLowerCase()
       .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
   };
 
   // onChange method
   const onChangeEmail = useCallback((e) => {
     const currEmail = e.target.value;
     setEmail(currEmail);
     
     if (!validateEmail(currEmail)) {
       setEmailMsg("이메일 형식이 올바르지 않습니다.")
       setIconEmail(true);
      } 
     else { 
      setEmailMsg("") 
      setIconEmail(false)
      }
     })
     
    const onChangePwd = useCallback((e) =>{
       const currPwd = e.target.value;
       setPassword(currPwd);
     
       if (!validatePwd(currPwd)) {
         setPwdMsg("영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.")
         setIconPw(true);
       } else {
         setPwdMsg("")
         setIconPw(false)
       }
   }, [])
   // onChange method end
 
   // 유효성 검사로 걸러주기 위해 변수로 넣어준다. return에서 삼항 연산자로 쓰인다.
   const isEmailValid = validateEmail(email);
   const isPwdValid = validatePwd(password);
 
   // 회원가입과 같이 유효성 검사가 통과되어야만 버튼 활성화가 된다.
   const isAllValid = isEmailValid && isPwdValid;
 
   // onClickSubmit method
   const onClickSubmit = (event) => {
     if(isAllValid) {
       const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
       const data = {
               memberEmail: email,
               memberPw: password,
       };

       
       
       axios.post(`${back}login`, data, { withCredentials: true })
           .then(function(res) {
            console.log(res.data)
            if(res.data.accessToken != undefined) {
              // 토큰값 헤더 저장
              const { accessToken, refreshToken } = res.data;
              if(refreshToken) {
                setCookie('refreshToken', refreshToken, {
                  path: '/',
                  secure: true,
                  sameSite: 'none'
                });
              }
              axios.defaults.headers.common['Authorization'] = `Bearer + ${accessToken}`;
              console.log(axios.defaults.headers.common.Authorization);
              
              // 토큰값 localStorage에 저장
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("loginStatus", "login");
  
  
              // 토큰값 페이로드 세션에 저장
              const data = jwt.decode(accessToken);
              console.log(data);
              sessionStorage.setItem("userId", data.email);
              sessionStorage.setItem("userGrade", data.grade);
              sessionStorage.setItem("userNickname", data.nickname);
              sessionStorage.setItem("userSeq", data.seq);
      
              //홈화면 라우팅
              router.push("http://localhost:3000/");
              
              // accessToken 만료하기 1분 전에 로그인 연장
              setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
            } else {
              alert('잘못된 로그인 정보입니다.')
              router.reload();
            } 
           })
           .catch(function (error) {
             console.log(error)
           });
         }
   }
   // onClickSubmit method end
 
  return (
    <>  
      <SignInUI
        back={back}
        iconEmail={iconEmail}
        iconPw={iconPw}
        router={router}
        cookies={cookies}
        email={email}
        password={password}
        emailMsg={emailMsg}
        pwdMsg={pwdMsg}
        validateEmail={validateEmail}
        validatePwd={validatePwd}
        onChangeEmail={onChangeEmail}
        onChangePwd={onChangePwd}
        isEmailValid={isEmailValid}
        isPwdValid={isPwdValid}
        isAllValid={isAllValid}
        onClickSubmit={onClickSubmit}
      />
    </>
  )

}