import * as C from './header.styles' 
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

export default function LayoutHeaderUI(props){

    return (
        <C.HeaderWrapper>
        <Link href="/"><C.MainTitle><FontAwesomeIcon icon={faPalette} /></C.MainTitle></Link>
        <C.SubTitle>Artist<br/>&nbsp;&nbsp;WebSite</C.SubTitle>
        <C.MyProfile>
          {
            props.loginStatus ?
            <><Link href="/units/sign/sign-out"><C.SignInMenu>로그아웃</C.SignInMenu></Link><Link href={`${props.info}`}><C.InfoMenu>회원정보</C.InfoMenu></Link></> 
            : <><Link href="/units/sign/sign-in"><C.SignInMenu>로그인</C.SignInMenu></Link><Link href="/units/sign/sign-up"><C.SignupMenu>회원가입</C.SignupMenu></Link></>
          }
        </C.MyProfile>
        <C.Navigator>
          <Link href="/menu/exhibition"><C.Menu>전시회</C.Menu></Link>
          <Link href="/menu/artist"><C.Menu>작가소개</C.Menu></Link>
          <Link href="/menu/genre"><C.Menu>작품판매</C.Menu></Link>
          <Link href="/menu/commission"><C.Menu>작품의뢰</C.Menu></Link>
          <Link href="/menu/service.center"><C.Menu>고객센터</C.Menu></Link>
        </C.Navigator>
      
      </C.HeaderWrapper> 
    )
}