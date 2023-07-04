import LayoutHeader from "./header/header.presenter"
import LayoutFooter from "./footer/footer.presenter"
import { useEffect, useState } from "react"

export default function Layout(props){

    const [show, setShow] = useState(true); 
    useEffect(()=>{ 
        if (sessionStorage.getItem('show')){
            setShow(false);
        }
    })
    return (
        <>
         {show? <LayoutHeader/>:<></>}
             <div show={show}>{props.children}</div>
         {show? <LayoutFooter/>:<></>}
        </>
    )

}