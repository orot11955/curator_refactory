import * as C from './exhibition.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import React, {useCallback, useState} from 'react';
import axios from 'axios';


export default function AdminInfoExhibitionUI(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.ExhibitionWrapper>
            <C.AdminTitle>전시회 등록</C.AdminTitle>

            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>전시회 제목</C.Label>
                    <C.ExhibitionTitle type="text" onChange={props.onChangeTitle}/> &nbsp;&nbsp;&nbsp;
                    <C.ExhibitionFile type="file" onChange={props.handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 기간</C.Label>
                    <C.ExhibitionDate type="date" onChange={props.onChangeDate}/>&nbsp;~&nbsp; 
                    <C.ExhibitionDate type="date" onChange={props.onChangeDate}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.ExhibitionContent onChange={props.onChangeContent}/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button'>취소</C.CancelBtn>
                    <C.SubmitBtn type='button' onClick={props.handleClick}>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.ExhibitionWrapper>
        </C.Wrapper>
        </>
    )
}