import { useRouter } from "next/router"
import { useState } from "react"
import LayoutHeader from "./header.presenter"

const [menu, setMenu] = useState(FontFaceSetLoadEvent)

// 메뉴 클릭시 서브 카테고리 리스트 구현 
export default function HeaderContainer() {

    //
    const onClickMenuArtist = () => {
        
    }
    const onClickMenuGenre = () => {

    }
    const onClickMenuCommission = () => {

    }
    const onClickMenuExhibition = () => {

    }

    const onClickMenuService = () => {

    }

    return (
        <LayoutHeader
        artist={onClickMenuArtist}
        type={onClickMenuType}
        ask={onClickMenuCommission}
        exhibition={onClickMenuExhibition}
        service={onClickMenuService}
        loginStatue={loginStatue}
        />
    )
}