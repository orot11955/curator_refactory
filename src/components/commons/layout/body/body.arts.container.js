import LayoutBodyArtsUI from "./body.arts.presenter";
import { useState } from "react";

export default function LayoutBodyArts(){
    
    const [img, setImg] = useState('./images/column1.png');
    const onClickImg = (image) => {
        setImg(image)
    }

    return(
        <LayoutBodyArtsUI
         img={img}
         onClickImg={onClickImg}    
        />
    )
}