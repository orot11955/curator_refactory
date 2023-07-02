import { useState } from "react"
import LayoutHeaderUI from "./header.presenter"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'

export default function LayoutHeader() {

    const [menu, setMenu] = useState(FontFaceSetLoadEvent)
    
    // login 판별
    const [loginStatue, setLoginStatus] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userGrade, setUserGrade] = useState();
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
        menu={menu}
        cookies={cookies}
        artist={onClickMenuArtist}
        type={onClickMenuType}
        ask={onClickMenuCommission}
        exhibition={onClickMenuExhibition}
        service={onClickMenuService}
        loginStatue={loginStatue}
        />
    )
}