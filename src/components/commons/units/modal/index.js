import { useEffect } from 'react';
import * as C from './index.css'
import { useRouter } from 'next/router';

function ModalBasic(props) {
    
    const router = useRouter();

    // 모달 끄기 
    const closeModal = () => {
        props.setModalOpen(false);
    };

    console.log(document.getElementById('frame'))

    return (
        <>
         <C.iframe id='frame' style={{scrolling:'no'}} src={props.kakao}></C.iframe>
        </>
        
    );
}
export default ModalBasic;