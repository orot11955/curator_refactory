import * as C from './service.styles.js'
import Link from 'next/link'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

import ServiceContainer from './service.container'

export default function ServiceView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.ServiceWrapper>
        <C.ServiceBanner>
          <C.ServiceTitle>고객센터</C.ServiceTitle>
          <C.ServiceSubTitle>Service Center</C.ServiceSubTitle>
        </C.ServiceBanner>

        {/* 구현예정..? */}
        <C.Select>
            <option value={true}>전체</option>
            <option>결제/구매</option>
            <option>판매/등록</option>
            <option>경매</option>
            <option>상품/배송</option>
            <option>기타</option>
        </C.Select>
        <C.ServiceBtn>
          <C.Btn><C.LinkBtn href="#">자주 묻는 질문</C.LinkBtn></C.Btn>
          <C.Btn><C.LinkBtn href="/menu/service.center/new">1:1 문의하기</C.LinkBtn></C.Btn>
        </C.ServiceBtn>
        <C.ServiceTable>
          <C.Table>
            <tbody>
            {props.serviceList?.map((el, i) => (
            <C.Tr>
              <C.Div>{el.helpCate}</C.Div><C.Title onClick={() => props.onClickMove(el.helpSeq)}>{el.helpTitle}</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
            ))}
            </tbody>
          </C.Table>
        </C.ServiceTable>
        <LayoutPageNumber/>
       </C.ServiceWrapper>
      </C.Wrapper>
    </>
  )
}