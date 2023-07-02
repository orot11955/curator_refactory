import { useEffect, useState } from 'react';
import * as C from './modal.css'
import { useRouter } from 'next/router';
import axios from 'axios';

function ModalMove(props) {
    
    const router = useRouter();
    const back = process.env.NEXT_PUBLIC_URI;
    const [data , setData] = useState();

    useEffect(async()=>{
        const url = axios.get(`${back}parcelSelect?purSeq=${props.purSeq}`)
        const urlData = await Promise.resolve(url)
        setData(urlData.data);
        console.log(urlData.data);
    },[])
    
    // 모달 끄기 
    const closeModal = () => {
        props.setModalOpen(false);
    };

    return (
        <C.container src={data}>
            <C.close onClick={closeModal}>
                X
            </C.close>
        </C.container>
    );
}
export default ModalMove;