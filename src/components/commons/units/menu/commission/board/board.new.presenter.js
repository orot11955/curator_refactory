import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.new.styles'
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';


export default function CommissionBoardNewUI(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/commission'}>
              <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
          
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 작성하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv onChange={props.onSelectArtist} >
              <option value={true}>전체</option> 
              {props.artistList?.map((el, i) => (
                <option key={i} value={props.artistList[i].artistSeq}>{props.artistList[i].artistName}</option>
              ))}
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent onChange={props.onChangeContent}></C.CommissionContent>
          </C.ContentWrapper>


          <C.BtnWrapper>
            <C.CancelBtn onClick={props.onClickCancel}>취소</C.CancelBtn>
            <C.SubmitBtn type='button' onClick={props.onClickSubmit}>작성하기</C.SubmitBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}