import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.container'
import { useEffect } from 'react'
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

export default function AdminWorkView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.WorkWrapper>
            <C.AdminTitle>작품등록</C.AdminTitle>
            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>작품 제목</C.Label>
                    <C.WorkTitle type="text" onChange={props.onChangeTitle}/> &nbsp;&nbsp;&nbsp;
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 요약</C.Label>
                    <C.WorkSummary type="text" onChange={props.onChangeSummary}/> &nbsp;&nbsp;&nbsp;&nbsp;
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 가격</C.Label>
                    <C.WorkPrice type="text" placeholder='0원' onChange={props.onChangePrice}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>경매</C.Label>
                    <label>Y</label><C.WorkAuction type="radio" name='auction' value={1} onChange={props.onChangeAuction}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkAuction type="radio" name='auction' value={2} onChange={props.onChangeAuction}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 유무</C.Label>
                    <label>Y</label><C.WorkExhibition type="radio" name='exhibition' value={1} onChange={props.onChangeExhibition}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkExhibition type="radio" name='exhibition' value={2} onChange={props.onChangeExhibition}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작가 선택</C.Label>
                    <C.WorkArtist onChange={props.onSelectArtist} >
                        <option value={true}>전체</option> 
                        {props.artistList?.map((el, i) => (
                        <option key={i} value={props.artistList[i].artistSeq}>{props.artistList[i].artistName}</option>
                    ))}
                    </C.WorkArtist>
                    <C.Label>장르 선택</C.Label>
                    <C.WorkGenre onChange={props.onSelectGenre}>
                    <option value={true}>전체</option> 
                        {props.genreList?.map((el, i) => (
                        <option key={i} value={props.genreList[i].genreSeq}>{props.genreList[i].genreName}</option>
                    ))}
                    </C.WorkGenre>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>이미지</C.Label>
                    <C.WorkFile type="file" onChange={props.handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>상세설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.WorkContent onChange={props.onChangeContent}/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button' onClick={props.onClickCancel}>취소</C.CancelBtn>
                    <C.SubmitBtn type='button' onClick={props.handleClick}>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.WorkWrapper>
        </C.Wrapper>
        </>
    )
}