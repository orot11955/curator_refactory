import * as C from './commission.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from 'next/router';

export default function AdminCommissionView(props) {

    const router = useRouter();
    const [commList, setCommList] = useState();
    const [deleteComm, setDeleteComm] = useState();
    const back = process.env.NEXT_PUBLIC_URI
    
    useEffect(() => {
        axios.get(`${back}commAllList`)
        .then((res) => {
            setCommList(res.data);
        })
    },[])

    //작품 의뢰 내역 삭제하기
    const onChangeCheck = (e) => {
        const curr = e.target.value
        setDeleteComm(curr);
    }

    const onClickDelete = () => {
        axios.post(`${back}commissionDelete`,{"commSeq":deleteComm})
        .then((res) => {
            if(res.data === 1){
                alert('작품 의뢰게시물이 삭제되었습니다.')
                router.push('/admin/admin-info/commission')
            }else{
                alert('작품 의뢰게시물 삭제를 실패하였습니다.')
            }
        })
    }
    
    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.CommWrapper>
            <C.AdminTitle>작품의뢰내역</C.AdminTitle>
            <C.CommTable>
                <thead>
                <C.Tr>
                    <C.Th>확인</C.Th><C.Th>의뢰번호</C.Th><C.Th>의뢰제목</C.Th><C.Th>의뢰내용</C.Th><C.Th>작성날짜</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                {commList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Check onChange={onChangeCheck} type='radio' name='comm' value={el.commSeq}></C.Check><C.Td>{el.commSeq}</C.Td><C.Td>{el.commTitle}</C.Td><C.Td>{el.commContent}</C.Td><C.Td>{new Date(el.commDate).toLocaleString()}</C.Td>
                </C.Tr>
                ))}
                </tbody>
            </C.CommTable>
            <C.CommBtn>
             <C.Btn onClick={onClickDelete}>삭제하기</C.Btn>    
            </C.CommBtn>
            </C.CommWrapper>
        </C.Wrapper>
        </>
    )
}