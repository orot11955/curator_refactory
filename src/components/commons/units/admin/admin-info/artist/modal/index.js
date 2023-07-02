import { useEffect, useState } from 'react';
import * as C from './css'
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import axios from 'axios';

function ModalBasic(props) {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [profile, setProfile] = useState();
    const [sns, setSns] = useState();
    const [file, setFile] = useState();
    const [artistSeq, setArtistSeq] = useState();
    const back = process.env.NEXT_PUBLIC_URI

    //input 
    const onChangeName = (e) => {
        const currName = e.target.value;
        setName(currName);
    }

    const onChangeProfile = (e) => {
        const currProfile = e.target.value;
        setProfile(currProfile);
    }

    const onChangeSns = (e) => {
        const currSns = e.target.value;
        setSns(currSns);
    }

    //파일
    const onChangeFile = useCallback((e) => { 
        if (e.target.files === null) return;
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }, []);

    //onClick 등록
    const onClickSubmit = useCallback(async () => {
        if (!file) return;

        const formData = new FormData();
        await formData.append('artistImage', file);
        const uploader = { 
            artistName: name, 
            artistProfile: profile, 
            artistSns: sns,  
            artistHit: 0,    
            exhibitionSeq: 1,
        };
        const uploaderString = JSON.stringify(uploader);
        await formData.append('artistDTO', new Blob([uploaderString], {type: 'application/json'}));
        console.log(formData)
        await axios.post(`${back}adminArtistAdd`, formData, {headers: {'Content-Type': 'multipart/form-data'}})   
            .then((res) => {
                router.push(`/admin/admin-info/artist`)
            })
    }, [file]);


    // 모달 끄기 
    const closeModal = () => {
        props.setModalOpen(false);
    };

    


    return (
        <C.container>
         <C.close onClick={closeModal}>❌</C.close>
         <C.ModalWrapper>
            <h2>작가 등록</h2>
            <C.Label>* 이름</C.Label>
             <C.Input type="text" onChange={onChangeName}></C.Input>
            <C.Label>* 약력</C.Label>
             <C.Input type="text" onChange={onChangeProfile}></C.Input>
            <C.Label>* SNS 주소</C.Label>
             <C.Input type="text" onChange={onChangeSns}></C.Input>
            <C.Label>* 작가 이미지</C.Label>
             <C.InputFile type="file" onChange={onChangeFile}></C.InputFile>
            <C.Btn type='button' onClick={onClickSubmit}>등록</C.Btn>
         </C.ModalWrapper>
        </C.container>
    );
}
export default ModalBasic;