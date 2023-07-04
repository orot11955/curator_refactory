import AdminInfoCommissionUI from "./commission.admin.presenter"
import * as C from './commission.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from 'next/router';

export default function AdminInfoCommission() {


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
        <AdminInfoCommissionUI
            router={router}
            commList={commList}
            deleteComm={deleteComm}
            back={back}
            onChangeCheck={onChangeCheck}
            onClickDelete={onClickDelete}
        />
        </>
    )
}