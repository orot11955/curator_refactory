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
import Post from '../../../../../../pages/sign/sign-up/address/index';
import Router, { useRouter } from 'next/router'
import path from 'path'

export default function SignUpView(props) {
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
      <C.Wrapper>
        <C.SignUpForm>
          <C.SignUpInput>
          <C.SignUpTitle>회원정보 입력</C.SignUpTitle> 
            <C.SectionColumn>
              <C.Label>* 아이디(이메일)</C.Label>
              <C.Email type="text" onChange={onChangeEmail} required/> @
              <C.Domain id={domain} onChange={onChangeDomain}>
                <option value={true}>이메일을 선택하세요</option>
                <option value={"naver.com"}>naver.com</option>
                <option value={"hanmail.net"}>hanmail.net</option>
                <option value={"gmail.com"}>gmail.com</option>
              </C.Domain>
              <C.Button onClick={onClickEmailCheck}>중복확인</C.Button>
              <C.EmailCheck><C.IconF>{iconF? <FontAwesomeIcon icon={faCircleExclamation}/>:<></>}</C.IconF><C.Icon>{icon? <FontAwesomeIcon icon={faCircleCheck}/>:<></>}</C.Icon>
              {emailMsg}
              {
                curr_cookie.get('checkTime') ?
                <><C.EmailToken type='text' placeholder="인증번호 입력" onChange={onChangeToken} ></C.EmailToken><C.BtnToken type='button' onClick={onClickTokenCheck}>인증완료</C.BtnToken></>   
                
                : <p></p>
              } 
              </C.EmailCheck>
            </C.SectionColumn>
            <C.SectionRow style={{height:'40px' , margin:'0px'}}>
              <C.Label>* 이름</C.Label>
              <C.Name type="text" onChange={onChangeName} /><br/> 
              <C.Label>* 닉네임</C.Label>
              <C.NicName type="text" onChange={onChangeNickname} />
            </C.SectionRow>
            <C.ErrorMsg>
              <div style={msgStyle1}>{iconName? <C.IconF><FontAwesomeIcon icon={faCircleExclamation}/></C.IconF>:<></>}{nameMsg}</div>
              <div style={msgStyle2}>{iconNick? <C.IconF><FontAwesomeIcon icon={faCircleExclamation}/></C.IconF>:<></>}{nickMsg}</div>
            </C.ErrorMsg>
            <C.SectionRow>
              <C.Label>* 전화번호</C.Label>
              <C.Tel value="010" maxLength={3} onChange={onChangeTel1} required/> - <C.Tel maxLength={4} onChange={onChangeTel2} required /> - <C.Tel maxLength={4} onChange={onChangeTel3} required/>
            </C.SectionRow>
            <C.Label>* 비밀번호 </C.Label>
            <C.Password type="password" maxLength="10" placeholder="영문, 숫자, 특수기호 조합으로 8자리 이상 입력" onChange={onChangePassword} required></C.Password>
            <C.Label>* 비밀번호 확인</C.Label>
            <C.RePassword type="password" maxLength="10" placeholder="영문, 숫자, 특수기호 조합으로 8자리 이상 입력" onChange={onChangePasswordCheck} required></C.RePassword>
            <div className="address_search" >
                <C.Label>* 주소</C.Label>
                <C.Addr className="user_enroll_text" type="text" required={true} name="address" onChange={handleInput} value={address.address}></C.Addr>
                <C.AddrBtn onClick={handleComplete}>우편번호 찾기</C.AddrBtn>
                {popup && <Post company={address} setcompany={setAddress}></Post>}
            </div>
            <p>{addrMsg}</p>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="agree" name="login"/> [필수] 개인정보 및 수집 이용 동의
            </C.SignUpCheck>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="marketing" name="login"/> [선택] 마케팅 이용 수신 및 정보 동의
            </C.SignUpCheck>
            <C.SignUpBtn type="button" onClick={onClickSubmit}>회원가입</C.SignUpBtn>
          </C.SignUpInput>
        </C.SignUpForm>
      </C.Wrapper>
    </>
  )

}