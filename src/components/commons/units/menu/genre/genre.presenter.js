import { useState, useEffect } from 'react'
import axios from 'axios';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './genre.styles'
import { useCallback } from 'react';
import { isAbsolute, relative } from 'path';
import { useRouter } from 'next/router';

export default function GenreMenuUI(props) {

  return ( 
    <>   
        <C.Wrapper>
         <C.GenreBanner>
            <C.BannerTitle>작품 판매 </C.BannerTitle>
            <C.BannerSubTitle>Buy Original Paintings</C.BannerSubTitle>
         </C.GenreBanner>
            <C.GenreSelect>
               <C.Genre onClick={props.onClickPostAll} >전체보기</C.Genre> 
               {props.genreList?.map((el, i) => (
               <C.Genre onClick={() => props.onClickPost(el.genreSeq)} >{el.genreName}</C.Genre>
               ))}
               <C.Select>
                  <option value={true}>추천순</option>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>리뷰 많은순</option>
                  <option>저가순</option>
                  <option>고가순</option>
               </C.Select>
            </C.GenreSelect> 
         <C.GenreWrapper> 
         {props.mapping?.map((el, i) => (
            <C.GenreColumn key={el.postSeq} onClick={() => props.onClickContent(el.postAuction, el.postSeq)}>
               <div style={{position: 'relative', height: '389px'}}>
                  <C.ColumnImage src={el.postImageName} style={{position: 'absolute'}} fill={true} />
                     <C.ColumnInfo>
                        <C.ColumnTitle>{el.postTitle}</C.ColumnTitle>
                        <C.ColumnContent>{el.postSummary}</C.ColumnContent>
                        <C.ColumnArtist> 
                           <C.ColumnPrice>{el.postPrice} 원</C.ColumnPrice>
                        </C.ColumnArtist>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </div>
            </C.GenreColumn>
         ))}
         </C.GenreWrapper>
         <LayoutPageNumber/>

        </C.Wrapper>
    </>
  )

}