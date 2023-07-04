import * as C from './sign.up.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import {Cookies, useCookies} from 'react-cookie'
import DaumPostcode from 'react-daum-postcode';
import { Modal, Button } from "antd";
import Router, { useRouter } from 'next/router'
import path from 'path'
import Post from '../../../../../../pages/units/sign/sign-up/address/index'

export default function SignUpView(props) {
 
  return (
    <>  
      <C.Wrapper>
        <C.SignUpForm>
          <C.SignUpInput>
          <C.SignUpTitle>회원정보 입력</C.SignUpTitle> 
            <C.SectionColumn>
              <C.Label>* 아이디(이메일)</C.Label>
              <C.Email type="text" onChange={props.onChangeEmail} required/> @
              <C.Domain id={props.domain} onChange={props.onChangeDomain}>
                <option value={true}>이메일을 선택하세요</option>
                <option value={"naver.com"}>naver.com</option>
                <option value={"hanmail.net"}>hanmail.net</option>
                <option value={"gmail.com"}>gmail.com</option>
              </C.Domain>
              <C.Button onClick={props.onClickEmailCheck}>중복확인</C.Button>
              <C.EmailCheck><C.IconF>{props.iconF? <FontAwesomeIcon icon={faCircleExclamation}/>:<></>}</C.IconF><C.Icon>{props.icon? <FontAwesomeIcon icon={faCircleCheck}/>:<></>}</C.Icon>
              {props.emailMsg}
              {
                props.curr_cookie.get('checkTime') ?
                <><C.EmailToken type='text' placeholder="인증번호 입력" onChange={props.onChangeToken} ></C.EmailToken><C.BtnToken type='button' onClick={props.onClickTokenCheck}>인증완료</C.BtnToken></>   
                
                : <p></p>
              } 
              </C.EmailCheck>
            </C.SectionColumn>
            <C.SectionRow style={{height:'40px' , margin:'0px'}}>
              <C.Label>* 이름</C.Label>
              <C.Name type="text" onChange={props.onChangeName} /><br/> 
              <C.Label>* 닉네임</C.Label>
              <C.NicName type="text" onChange={props.onChangeNickname} />
            </C.SectionRow>
            <C.ErrorMsg>
              <div style={props.msgStyle1}>{props.iconName? <C.IconF><FontAwesomeIcon icon={faCircleExclamation}/></C.IconF>:<></>}{props.nameMsg}</div>
              <div style={props.msgStyle2}>{props.iconNick? <C.IconF><FontAwesomeIcon icon={faCircleExclamation}/></C.IconF>:<></>}{props.nickMsg}</div>
            </C.ErrorMsg>
            <C.SectionRow>
              <C.Label>* 전화번호</C.Label>
              <C.Tel value="010" maxLength={3} onChange={props.onChangeTel1} required/> - <C.Tel maxLength={4} onChange={props.onChangeTel2} required /> - <C.Tel maxLength={4} onChange={props.onChangeTel3} required/>
            </C.SectionRow>
            <C.Label>* 비밀번호 </C.Label>
            <C.Password type="password" maxLength="10" placeholder="영문, 숫자, 특수기호 조합으로 8자리 이상 입력" onChange={props.onChangePassword} required></C.Password>
            <C.Label>* 비밀번호 확인</C.Label>
            <C.RePassword type="password" maxLength="10" placeholder="영문, 숫자, 특수기호 조합으로 8자리 이상 입력" onChange={props.onChangePasswordCheck} required></C.RePassword>
            <div className="address_search" >
                <C.Label>* 주소</C.Label>
                <C.Addr className="user_enroll_text" type="text" required={true} name="address" onChange={props.handleInput} value={props.address.address}></C.Addr>
                <C.AddrBtn onClick={props.handleComplete}>우편번호 찾기</C.AddrBtn>
                {props.popup && <Post company={props.address} setcompany={props.setAddress}></Post>}
            </div>
            <p>{props.addrMsg}</p>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="agree" name="login"/> [필수] 개인정보 및 수집 이용 동의
            </C.SignUpCheck>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="marketing" name="login"/> [선택] 마케팅 이용 수신 및 정보 동의
            </C.SignUpCheck>
            <C.SignUpBtn type="button" onClick={props.onClickSubmit}>회원가입</C.SignUpBtn>
          </C.SignUpInput>
        </C.SignUpForm>
      </C.Wrapper>
    </>
  )

}