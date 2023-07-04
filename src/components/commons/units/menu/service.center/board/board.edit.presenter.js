import * as C from './board.edit.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ServiceBoardEditView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/service.center'}>
                <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
       </C.BoardBanner>
       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 수정하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Label>제목</C.Label>
            <C.CommissionTitle value={props.helpView?.helpTitle}></C.CommissionTitle>
            <C.Label>유형</C.Label>
            <C.CommissionSelect></C.CommissionSelect>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.CommissionContent value={props.helpView?.helpContent}></C.CommissionContent>
          </C.ContentWrapper>
          <C.BtnWrapper>
            <C.ModifyBtn>취소</C.ModifyBtn>
            <C.SubmitBtn>수정완료</C.SubmitBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>
       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}