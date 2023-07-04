import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import * as C from './sign.in.styles'
import Link from 'next/link'
import { Cookies, useCookies } from 'react-cookie'  // cookie 
import { useState, useCallback  } from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken'; // jwt
import Router, { useRouter } from 'next/router'

// 로그인 페이지 
export default function SignInView(props) {

  return (            
    <>
      <C.Wrapper>
        <C.SignInForm>
          <C.SignInTitle>로그인</C.SignInTitle>
          <C.InputWrapper>
            <C.Email type="text" onChange={props.onChangeEmail} placeholder="이메일"></C.Email>
            <C.EmailError><C.Icon>{props.iconEmail? <FontAwesomeIcon icon={faCircleExclamation}/>:<></>}</C.Icon>{props.emailMsg}</C.EmailError>
            <C.Password type="password" onChange={props.onChangePwd} placeholder="비밀번호"></C.Password>
            <C.PasswordError><C.Icon>{props.iconPw? <FontAwesomeIcon icon={faCircleExclamation}/>:<></>}</C.Icon>{props.pwdMsg}</C.PasswordError>
        
           <C.InputSpan>
            <C.LoginCheck type="checkbox" id="login" name="login"/> 자동 로그인
           </C.InputSpan>
           
           <C.SignInBtn type="button" onClick={props.onClickSubmit}>로그인</C.SignInBtn>
           <C.SignInBtn type="submit">비회원 주문확인</C.SignInBtn>
           <C.InputLink>
            <Link href="../login/sign-up">
              <C.SignUpLogin>회원가입</C.SignUpLogin>
              </Link>
            <Link href="#">
              <C.FindUser>아이디/비밀번호 찾기</C.FindUser>
              </Link>
            </C.InputLink>
          </C.InputWrapper>
        </C.SignInForm>  
      </C.Wrapper>
    </>
  )
}
