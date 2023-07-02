import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as C from './side-nav-admin.styles' 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LayoutSideNavAdmin() {

  const router = useRouter();

  const onClickMember = () => {
    router.push('http://localhost:3000/info/admin')
  }
  
  const onClickArtist = () => {
    router.push('http://localhost:3000/info/admin/artist')
  }

  const onClickHelp = () => {
    router.push('http://localhost:3000/info/admin/help')
  }
  const onClickWork = () => {
    router.push('http://localhost:3000/info/admin/work')
  }
  const onClickExhibition = () => {
    router.push('http://localhost:3000/info/admin/exhibition')
  }
  const onClickCommission = () => {
    router.push('http://localhost:3000/info/admin/commission')
  }

  return (
    <>  
        <C.Wrapper>
         <C.InfoMenu>
              <C.InfoList>
                  <C.List onClick={onClickMember}>회원관리</C.List>
                  <C.List onClick={onClickArtist}>작가관리</C.List>
                  <C.List onClick={onClickHelp}>문의내역</C.List>
                  <C.List onClick={onClickCommission}>작품의뢰내역</C.List>
                  <C.List onClick={onClickWork}>작품등록</C.List>
                  <C.List onClick={onClickExhibition}>전시회등록</C.List>
              </C.InfoList>
          </C.InfoMenu> 
        </C.Wrapper>
    </>
  )

}