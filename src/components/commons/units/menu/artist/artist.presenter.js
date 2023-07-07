import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './artist.styles'
import { useEffect, useState, useLayoutEffect, useCallback } from 'react'
import axios from 'axios'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'

export default function ArtistMenuUI(props) {

  return (
    <>  
      <C.Wrapper>
        <C.ArtistBanner>
         <C.ArtistTitle>작가 정보</C.ArtistTitle>
         <C.ArtistSubTitle>Artist Profile</C.ArtistSubTitle>
        </C.ArtistBanner>
 
        <C.ArtistWrapper>          
        {props.mapping?.map((el, i) => ( 
          <C.ArtistColumn key={i} onLoad={() => props.onLoadBookmark(el.artistSeq, el.artistName)}>
           <C.ProfileSection>
            <C.ProfileImage src={el.artistImage}></C.ProfileImage> 
            <C.Profile>
              <C.Name>{el.artistName}</C.Name> 
              {/* <C.Email>119755@naver.com</C.Email> */}
              <C.Sns onClick={`${el.artistSns}`}><C.Image/></C.Sns>
              {/* icon color: #E44C7E; */}
              <C.Heart>
                <FontAwesomeIcon id={el.artistName} onClick={() => props.onClickBook(el.artistSeq, el.artistName)} icon={faHeart} style={{color: "#E44C7E"}} />
              </C.Heart>
            </C.Profile> 
            <C.ProfileInfo>
              <C.Following>Following <span>2844</span></C.Following>
              <C.Sales>Total Sales <span>29</span></C.Sales>
              <C.Intro>
                {el.artistProfile} 
              {/* <C.ProfileBtn>작가 상세보기</C.ProfileBtn> */}
              </C.Intro>
            </C.ProfileInfo>
           </C.ProfileSection>
           <C.Line/> 
           <C.ProfileSection>
            <C.History>
              <C.HistoryTitleLeft>Record</C.HistoryTitleLeft>
              <C.Record>
              {el.proRecord1} <br/>
              {el.proRecord2} <br/>
              {el.proRecord3} <br/>
              {el.proRecord4} <br/>
              </C.Record>
            </C.History>
            <C.History>
              <C.HistoryTitleRight>대표작품</C.HistoryTitleRight>
              <C.Record>
              {el.proPainting1} <br/>
              {el.proPainting2} <br/>
              {el.proPainting3} <br/>
              {el.proPainting4} <br/>
              </C.Record>
            </C.History>
           </C.ProfileSection>
          {/* ====== 상세보기 클릭시 나오는 이력 ====== */}
          {/* 그림 클릭시 등록된 작품 판매 게시글로 이동 */}
            {/* <C.Work>
              <C.WorkImage />
                <C.WorkTitle></C.WorkTitle>       
            </C.Work> */}
          </C.ArtistColumn>
        ))}

        </C.ArtistWrapper>
        <LayoutPageNumber/>
      </C.Wrapper>
    </>
  )
  }
