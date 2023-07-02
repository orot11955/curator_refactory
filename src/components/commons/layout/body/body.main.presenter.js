import { useState } from 'react'
import * as C from './body.main.styled'


export default function LayoutBodyMain(props){

    const [img, setImg] = useState('./images/column1.png');
    const onClickImg = (image) => {
        setImg(image)
    }
    
    return (
        <>
        <C.BodyTitle>Best Art</C.BodyTitle>
        <C.BodyWrapper>
         <C.LeftWrapper>
            <C.BestArt src={img}/>
         </C.LeftWrapper>
         <C.RightWrapper>
            <C.ArtColumn onClick={()=> onClickImg('./images/column9.jpeg')} src={'./images/column9.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column3.png')} src={'./images/column3.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column2.jpg')} src={'./images/column2.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column4.png')} src={'./images/column4.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column1.png')} src={'./images/column1.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column5.jpeg')} src={'./images/column5.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/art01.jpg')} src={'./images/art01.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/art03.jpeg')} src={'./images/art03.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/art07.jpeg')} src={'./images/art07.jpeg'}></C.ArtColumn>
         </C.RightWrapper>
        </C.BodyWrapper>
        </>
   
    )
}