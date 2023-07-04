import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.new.styles'
import { CKEditor } from 'ckeditor4-react'
import React, {useCallback, useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ServiceBoardNewView(props) {

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
          <C.BoardFormTitle>게시글 작성하기</C.BoardFormTitle>
          <C.Line/>

          <C.InputWrapper>
            <C.Label>문의 유형</C.Label>
            <C.HelpDiv onChange={props.onChangeCat}>
              <option selected={true}>전체</option>
              <option value={'결제/구매'}>결제/구매</option>
              <option value={'판매/등록'}>판매/등록</option>
              <option value={'경매'}>경매</option>
              <option value={'상품/배송'}>상품/배송</option>
              <option value={'기타'}>기타</option>
            </C.HelpDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>문의 제목</C.Label>
            <C.HelpTitle onChange={props.onChangeTitle} placeholder='문의할 내용의 제목을 입력하세요.'></C.HelpTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>문의 내용</C.Label>
            <C.ServiceContent onChange={props.onChangeContent}></C.ServiceContent>
          </C.ContentWrapper>
          <C.BtnWrapper>
            <C.CancelBtn type='button' onClick={props.onClickCancel}>취소</C.CancelBtn>
            <C.SubmitBtn type='button' onClick={props.onClickSubmit}>작성하기</C.SubmitBtn>
          </C.BtnWrapper>

        </C.BoardForm>
       </C.BoardFormWrapper>

       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}