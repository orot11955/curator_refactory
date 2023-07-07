import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie'
import { useEffect } from "react";

export default function Signout () {

    const [, , removeCookie] = useCookies(['refreshToken']);
    const router = useRouter();

    axios.defaults.headers.common['Authorization'] = "";
    useEffect(() => {
        sessionStorage.clear(); 
        localStorage.clear();
        alert('로그아웃 되었습니다.');
      }, []);
    
    removeCookie('refreshToken', {path: "/"})
    // removeCookie('refreshToken', {domain: 'http://localhost', path: '/', secure: true, httpOnly: true, sameSite: 'None'})
    
    router.push('/');

    return(<></>)

}