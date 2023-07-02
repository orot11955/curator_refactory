import AdminHelpView from "./help.admin.presenter"
import * as C from './help.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function AdminHelpContainer() {

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
        <AdminHelpView
            router={router}
            helpList={helpList}
            deleteHelp={deleteHelp}
            back={back}
            onClickDelete={onClickDelete}
            onChangeCheck={onChangeCheck}
        />
        </>
    )
}