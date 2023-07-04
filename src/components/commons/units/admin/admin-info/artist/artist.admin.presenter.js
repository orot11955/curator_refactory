import * as C from './artist.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.container'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import ModalBasic from './modal'

export default function AdminInfoArtistUI(props) {

    return (
        <>
        <C.Wrapper>
         <LayoutSideNavAdmin/>
            <C.ArtistWrapper>
            <C.ArtistTitle>작가관리</C.ArtistTitle>
            <C.ArtistTable>
                <thead>
                <C.Tr>
                    <C.Th>선택</C.Th><C.Th>이름</C.Th><C.Th>소셜네트워크</C.Th><C.Th>판매점수</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                {props.artistList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Td><C.CheckBox onChange={props.onChangeCheck} type="radio" value={el.artistSeq} name='artist'/></C.Td><C.Td>{el.artistName}</C.Td><C.Td>{el.artistSns}</C.Td><C.Td>{el.artistHit}</C.Td>
                </C.Tr>
                ))}
                </tbody>
            </C.ArtistTable>
            <C.ArtistBtn> {props.modalOpen && <ModalBasic setModalOpen={props.setModalOpen} />}
             <C.Btn onClick={props.onClickModal}>추가하기</C.Btn>
             <C.Btn onClick={props.onClickDelete}>삭제하기</C.Btn>    
            </C.ArtistBtn>
            </C.ArtistWrapper>
        </C.Wrapper>
        </>
    )
}