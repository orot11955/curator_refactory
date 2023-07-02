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
      }, []);
    
    removeCookie('refreshToken', {path: "/"})
    // removeCookie('refreshToken', {domain: 'http://localhost', path: '/', secure: true, httpOnly: true, sameSite: 'None'})
    
    
    router.push('/');

    return(<></>)

}