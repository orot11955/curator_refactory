import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import * as C from './css'

function ModalFail(props) {
    
    const router = useRouter();

    useEffect(()=>{
        sessionStorage.setItem('show','show')
    })
    
    const onClickClose = () => {
        sessionStorage.removeItem('show');
        window.parent.location.href = 'http://localhost:3000/';
    }

    return (
        <>  
            <C.Wrapper>
             <C.Btn onClick={onClickClose}>❌</C.Btn>
             <C.Modal>
                <C.Kakao>KakaoPay</C.Kakao>
                <C.Title>결제를 실패하였습니다.</C.Title>
                <C.Icon><FontAwesomeIcon icon={faCreditCard} /></C.Icon>
                <C.Image/>
             </C.Modal>  
            </C.Wrapper>
        </>
    );
}
export default ModalFail;