import * as C from './help.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function AdminHelpView(props) {

    const router = useRouter();
    const [helpList, setHelpList] = useState();
    const [deleteHelp, setDeleteHelp] = useState();
    const back = process.env.NEXT_PUBLIC_URI

    useEffect(() => {
        axios.get(`${back}helpAllList`)
        .then((res) => {
            setHelpList(res.data);
        })
    },[])

    //삭제하기
    const onClickDelete = () => {    
        axios.post(`${back}helpDelete`,{"helpSeq":deleteHelp})
        .then((res)=>{
            if(res.data === 1){
                alert('문의 게시글이 삭제되었습니다.');
                router.push('/admin/admin-info/help')
            }else{
                alert('문의 게시글이 삭제를 실패하였습니다.');
            }
        })
    }
    
    const onChangeCheck = (e) => {
        const curr = e.target.value;
        setDeleteHelp(curr);
    }

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.HelpWrapper>
            <C.AdminTitle>문의내역</C.AdminTitle>
            <C.HelpTable>
                <thead>
                <C.Tr>
                    <C.Th>선택</C.Th><C.Th>문의제목</C.Th><C.Th>문의내용</C.Th><C.Th>작성날짜</C.Th><C.Th></C.Th>
                </C.Tr>
                </thead>
                <tbody>
                {helpList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Check type="radio" name='help' onChange={onChangeCheck} value={el.helpSeq}/><C.Td>{el.helpTitle}</C.Td><C.Td>{el.helpContent}</C.Td><C.Td>{new Date(el.helpDate).toLocaleString()}</C.Td><C.Td><Link href={`/menu/service.center/${el.helpSeq}`}><FontAwesomeIcon icon={faCommentDots} size='xl'/></Link></C.Td>
                </C.Tr>
                ))}    
                </tbody>
            </C.HelpTable>
            <C.HelpBtn>
             <C.Btn onClick={onClickDelete}>삭제하기</C.Btn>    
            </C.HelpBtn>
            </C.HelpWrapper>
        </C.Wrapper>
        </>
    )
}