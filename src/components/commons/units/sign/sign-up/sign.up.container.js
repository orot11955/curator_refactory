import SignUpView from '../../../../../../src/components/commons/units/sign/sign-up/sign.up.presenter' 
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

export default function SignUpContainer() {

  const back = process.env.NEXT_PUBLIC_URI
  const [icon, setIcon] = useState(false); 
  const [iconF, setIconF] = useState(false); 
  const [iconName, setIconName] = useState(false);
  const [iconNick, setIconNick] = useState(false);
  // 사용 객체 선언
  const [cookies, setCookie, removeCookie] = useCookies('emailCheckToken');
  const [openPostcode, setOpenPostcode] = React.useState(false);
  const curr_cookie = new Cookies();
  const router = useRouter();

  // state
  // email
  const [email, setEmail] = useState("")
  const [fullEmail, setFullEmail] = useState("")
  const [domain, setDomain] = useState("")
  const [emailCheck, setEmailCheck] = useState("")
  // token
  const [token, setToken] = useState("")
  const [modify, setModify] = useState("")
  // status
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState(""); 
  const [tel1, setTel1] = useState(""); 
  const [tel2, setTel2] = useState(""); 
  const [tel3, setTel3] = useState(""); 
  // message
  const [emailMsg, setEmailMsg] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [nickMsg, setNickMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [pwMsgCheck, setPwMsgCheck] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [addrMsg, setAddrMsg] = useState("");  

  
  const msgStyle1 = {
    fontSize: '13px',
    fontWeight: '600',
    color: 'rgba(0,0,0,0.8)',
    marginLeft: '55px',
  }
  const msgStyle2 = {
    fontSize: '13px',
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    marginLeft: '140px',
  }
  
  useEffect(() => {
    removeCookie('checkTime', {path:'/'})
    removeCookie('checkToken', {path:'/'})

  }, [])

  useCallback(() => {

  }, [curr_cookie.get('checkTime')])
  

  //validate
  const validateName = (name) => {
    return name
    };

  const validateNick = (nick) => {
    return nick
    };
      
  const validatePw = (pw) => {
    return pw
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };

  const validatePwCheck = (pwCheck) => {
    return pwCheck
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };

  
  //function
  // useEffect = (() => {
  //   console.log('')
  // }, [modify])

  //email
  const onClickEmailCheck = (e) => {
    setIcon(false);
    setIconF(false);
    const currEmail = e.target.value;
    // setEmailMsg("이메일을 중복 확인해주세요") 
    console.log(email + domain)
    const insertEmail = email + "@" + domain
    console.log(insertEmail)
    setFullEmail(insertEmail)
    console.log(fullEmail)
    
    axios.get(`${back}emailCheck?insertEmail=${insertEmail}`)
        .then(function(res) {
          // 토큰값 헤더 저장
          console.log(res.data)
          if (res.data == 1) {
            setEmailMsg("사용중인 이메일 주소입니다.")
            setIconF(true);
          } else if (res.data == 0){
            setEmailMsg("사용 가능한 이메일 주소입니다.")
            setIcon(true);
            setEmailCheck("check");
            axios.get(`${back}registerCode?insertEmail=${insertEmail}`)
              .then(function(res) {
                console.log(res.data)
                setCookie('checkTime', true, {
                  path: '/', 
                  maxAge: 600
                })
                setModify("check")
              })
              .catch(function (error){

              })
          }
          })
        .catch(function (error) {
          console.log(error)
        })
  
}

// token 확인
const onClickTokenCheck = useCallback((e) => {
  axios.post(`${back}registerCodeResult`, {'token': token}, { headers: { "Content-type": "application/json; charset=UTF-8" }})
    .then((res) => {
      if(res.data == 1) {
        removeCookie('checkTime')
        setCookie('checkToken', true, {
          path: '/', 
          maxAge: 1800
        })
        setIcon(false);
        removeCookie('checkTime', {path:'/'})
        setEmailMsg("")
      } else alert('올바르지 않은 인증번호입니다.')
    })
  })

// onChange
const onChangeEmail = (event) => {
  setEmail(event.target.value)
  console.log(email);
};

const onChangeDomain = (event) => {
  setDomain(event.target.value)
  console.log(domain);
};

const onChangeToken = (event) => {
setToken(event.target.value)
  console.log(token);
}

//name
const onChangeName = useCallback((e) => {
  const currName = e.target.value;
  setName(currName);
  

 if (!validateName(currName)) {
    setNameMsg("")} 
else { 
  setNameMsg("")
  setIconName(false) 
}
  })

//nick
const onChangeNickname = useCallback((e) => {
  const currNick = e.target.value;
  setNick(currNick);
  
 if (!validateNick(currNick)) {
    setNickMsg("")} 
else { 
  setNickMsg("") 
  setIconNick(false)
}
  })

//password
const onChangePassword = useCallback((e) => {
  const currPw = e.target.value;
  setPw(currPw);
  "비밀번호를 입력하세요"
 if (!validatePw(currPw)) {
    setPwMsg("영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.")} 
else { setPwMsg("") }
  })

const onChangePasswordCheck = useCallback((e) => {
  const currPwC = e.target.value;
  setPwCheck(currPwC);
  "비밀번호를 입력하세요"
 if (!validatePw(currPwC)) {
    setPwMsgCheck("영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.")} 
 else { 
    if(pw != e.target.value) {
      setPwMsgCheck("비밀번호와 비밀번호 확인이 일치하지 않습니다.") }
    else { setPwMsgCheck("") }
    }
  })

//phone
const onChangeTel1 = useCallback((e) => {
  const tel1 = "010";
  setTel1(tel1);
})

const onChangeTel2 = useCallback((e) => {
  const tel2 = e.target.value;
  setTel2(tel2);
})

const onChangeTel3 = useCallback((e) => {
  const tel3 = e.target.value;
  setTel3(tel3);
})

//addr
  const [address, setAddress] = useState({
    address:'',
  });
  
  const [popup, setPopup] = useState(false);
  
  const handleInput = (e) => {
    setAddress({
        ...address,
          [e.target.name]:e.target.value,
      })
  }
  
  const handleComplete = (data) => {
      setPopup(!popup);
  }

  //submit
  const onClickSubmit = useCallback((e) => {
    removeCookie('emailCheckToken', {path: "/"})
      const dto = {
              memberEmail: fullEmail,
              memberPw: pw,
              memberName: name,
              memberNickname: nick,
              memberAddr: address.address,
              memberPhone: tel1 + tel2 + tel3,
              memberGrade: 1
            };
            axios.post(`${back}register`, dto)
            .then(function(res) {
              console.log(dto)
              console.log(res.data);
              if(res.data == 1) {
                router.push('http://localhost:3000/')
                removeCookie('checkToken', {path: "/"})
              } else {
              removeCookie('emailCheckToken', {path: "/"})
              removeCookie('checkToken', {path: "/"})
              setNameMsg('이름을 입력하세요.') 
              setIconName(true)
              setNickMsg('닉네임을 입력하세요.')
              setIconNick(true)
              alert("회원가입에 실패하였습니다.")
            }
          })
          .catch(function(error) {
            removeCookie('emailCheckToken', {path: "/"})
            removeCookie('checkToken', {path: "/"})
            console.log(error);
          })
        
  })

    return (
        <>
          <SignUpView
            back={back}
            icon={icon}
            iconF={iconF}
            iconName={iconName}
            iconNick={iconNick}
            cookies={cookies}
            openPostcode={openPostcode}
            curr_cookie={curr_cookie}
            router={router}
            email={email}
            fullEmail={fullEmail}
            domain={domain}
            emailCheck={emailCheck}
            token={token}
            modify={modify}
            name={name}
            nick={nick}
            pw={pw}
            pwCheck={pwCheck}
            phone={phone}
            addr={addr}
            tel1={tel1}
            tel2={tel2}
            tel3={tel3}
            emailMsg={emailMsg}
            nameMsg={nameMsg}
            nickMsg={nickMsg}
            pwMsg={pwMsg}
            pwMsgCheck={pwMsgCheck}
            phoneMsg={phoneMsg}
            addrMsg={addrMsg}
            msgStyle1={msgStyle1}
            msgStyle2={msgStyle2}
            validateName={validateName}
            validateNick={validateNick}
            validatePw={validatePw}
            validatePwCheck={validatePwCheck}
            onClickEmailCheck={onClickEmailCheck}
            onClickTokenCheck={onClickTokenCheck}
            onChangeEmail={onChangeEmail}
            onChangeDomain={onChangeDomain}
            onChangeToken={onChangeToken}
            onChangeName={onChangeName}
            onChangeNickname={onChangeNickname}
            onChangePassword={onChangePassword}
            onChangePasswordCheck={onChangePasswordCheck}
            onChangeTel1={onChangeTel1}
            onChangeTel2={onChangeTel2}
            onChangeTel3={onChangeTel3}
            address={address}
            popup={popup}
            handleInput={handleInput}
            handleComplete={handleComplete}
            onClickSubmit={onClickSubmit}
            
          />
        </>
    )
}