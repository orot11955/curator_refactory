import { useEffect, useState } from 'react';
import * as C from './admin.info.styles'
import LayoutSideNavAdmin from '../../../layout/side-nav-admin/side-nav-admin.presenter'
import axios from 'axios'
import { useRouter } from 'next/router';


export default function AdminInfoView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.MemberWrapper>
            <C.MemberTitle>회원관리</C.MemberTitle>
            <C.MemberTable>
                <thead>
                <C.Tr>
                    <C.Th>선택</C.Th><C.Th>번호</C.Th><C.Th>이메일</C.Th><C.Th>닉네임</C.Th><C.Th>이름</C.Th><C.Th>연락처</C.Th><C.Th>회원등급</C.Th><C.Th>가입일자</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                {props.memberList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.CheckBox onChange={props.onChangeCheck} value={el.memberSeq} type="radio" name='delete'></C.CheckBox><C.Td>{el.memberSeq}</C.Td><C.Td>{el.memberEmail}</C.Td><C.Td>{el.memberNickname}</C.Td><C.Td>{el.memberName}</C.Td><C.Td>{el.memberPhone}</C.Td><C.Td>{el.memberGrade}</C.Td><C.Td>{new Date(el.memberDate).toLocaleString()}</C.Td>
                </C.Tr>                
                ))}    
                </tbody>
            </C.MemberTable>
            <C.MemberBtn>
             <C.Btn onClick={props.onClickDelete}>삭제하기</C.Btn>    
            </C.MemberBtn>
            </C.MemberWrapper>
        </C.Wrapper>
        
        </>
    )
}