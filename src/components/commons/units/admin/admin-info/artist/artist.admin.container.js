import * as C from './artist.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import ModalBasic from './modal'
import AdminInfoView from "./artist.admin.presenter"

export default function AdminInfoContainer() {

    const router = useRouter();
    const [deleteArtist, setDeleteArtist] = useState();
    const [artistList, setArtistList] = useState();
    const back = process.env.NEXT_PUBLIC_URI

    // 작가 불러오기 
    useEffect(() => {
        axios.get(`${back}artistAllList`)
        .then((res) => {
            setArtistList(res.data);
        })
    },[])

    // 작가 삭제하기 
    const onClickDelete = () => {    
        axios.post(`${back}artistMemberDelete`,{"artistSeq":deleteArtist})
        .then((res)=>{
            if(res.data === 1){
                alert('작가가 삭제되었습니다.');
                router.push('/admin/admin-info/artist');
            }else{
                alert('작가 삭제를 실패하였습니다.');
            }
        })
    }
    const onChangeCheck = (e) => {
        const curr = e.target.value;
        setDeleteArtist(curr);
    }

    //작가 추가하기********
    const onClickModal = () => {
        showModal()
    }

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <>
        <AdminInfoView 
            router={router}
            deleteArtist={deleteArtist}
            artistList={artistList}
            back={back}
            onClickDelete={onClickDelete}
            onChangeCheck={onChangeCheck}
            onClickModal={onClickModal}
            modalOpen={modalOpen}
            showModal={showModal}
        />
        </>
    )
}