import { useRouter } from "next/router";
import LayoutHeaderUI from "./header.presenter"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'

export default function LayoutHeader() {
    
    // login 판별
    const [loginStatus, setLoginStatus] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userGrade, setUserGrade] = useState();
    const router = useRouter();
    var info;

    useEffect(() => {
        setLoginStatus(localStorage.getItem('loginStatus'));
        setUserGrade(sessionStorage.getItem('userGrade'));
    })


    if(userGrade == 1) {
        info = "/info/user";
    } else info = "/info/admin";

    return (
        <LayoutHeaderUI
        loginStatus={loginStatus}
        userGrade={userGrade}
        info={info}
        />
    )
}