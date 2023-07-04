import AdminInfoUI from "./admin.info.presenter"
import { useEffect, useState } from 'react';
import * as C from './admin.info.styles'
import LayoutSideNavAdmin from '../../../layout/side-nav-admin/side-nav-admin.presenter'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function AdminInfo() {

    const router = useRouter();
    const [memberList, setMemberList] = useState();
    const back = process.env.NEXT_PUBLIC_URI
    const [deleteMember, setDeleteMember] = useState();

    // 회원 불러오기 
    useEffect(() => {
        axios.get(`${back}adminCustomerList`)
        .then((res) => {
            setMemberList(res.data);
        })
    },[])

    // 회원 삭제하기 
    const onClickDelete = () => {    
        axios.post(`${back}adminMemberDelete`,{"memberSeq":deleteMember})
        .then((res)=>{
            if(res.data === 1){
                alert('회원이 삭제되었습니다.');
                router.push('/admin/admin-info')
            }else{
                alert('회원이 삭제를 실패하였습니다.');
            }
        })
    }
    
    const onChangeCheck = (e) => {
        const curr = e.target.value;
        setDeleteMember(curr);
    }

    return (
        <>
        <AdminInfoUI
            router={router}
            memberList={memberList}
            back={back}
            deleteMember={deleteMember}
            onClickDelete={onClickDelete}
            onChangeCheck={onChangeCheck}
        />
        </>
    )
}