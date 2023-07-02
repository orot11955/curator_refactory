import * as C from './header.styles' 
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

export default function LayoutHeader(props){

  // login 판별
  const [loginStatue, setLoginStatus] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userGrade, setUserGrade] = useState();
  var info;

  useEffect(() => {
    setLoginStatus(localStorage.getItem('loginStatus'));
    setUserGrade(sessionStorage.getItem('userGrade'));
  })

  if(userGrade == 1) {
    info = "/user/user-info";
  } else info = "/admin/admin-info";


    return (
        <C.HeaderWrapper>
        <Link href="/"><C.MainTitle><FontAwesomeIcon icon={faPalette} /></C.MainTitle></Link>
        <C.SubTitle>Artist<br/>&nbsp;&nbsp;WebSite</C.SubTitle>
        <C.MyProfile>
          {
            loginStatue ?
            <><Link href="/sign/sign-out"><C.SignInMenu>로그아웃</C.SignInMenu></Link><Link href={`${info}`}><C.InfoMenu>회원정보</C.InfoMenu></Link></> 
            : <><Link href="/sign/sign-in"><C.SignInMenu>로그인</C.SignInMenu></Link><Link href="/sign/sign-up"><C.SignupMenu>회원가입</C.SignupMenu></Link></>
            
          
      
          }
        </C.MyProfile>
        <C.Navigator>
          <Link href="/menu/exhibition"><C.Menu onClick={props.exhibition}>전시회</C.Menu></Link>
          <Link href="/menu/artist"><C.Menu onClick={props.artist}>작가소개</C.Menu></Link>
          <Link href="/menu/genre"><C.Menu onClick={props.genre}>작품판매</C.Menu></Link>
          <Link href="/menu/commission"><C.Menu onClick={props.commission}>작품의뢰</C.Menu></Link>
          <Link href="/menu/service.center"><C.Menu onClick={props.service}>고객센터</C.Menu></Link>
        </C.Navigator>
      
      </C.HeaderWrapper> 
    )
}