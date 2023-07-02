import * as C from './body.arts.styled'

export default function LayoutBodyArtsUI(props){
    
    return (
        <>
        <C.BodyTitle>Best Art</C.BodyTitle>
        <C.BodyWrapper>
         <C.LeftWrapper>
            <C.BestArt src={props.img}/>
         </C.LeftWrapper>
         <C.RightWrapper>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column9.jpeg')}} src={'./images/column9.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column3.png')}} src={'./images/column3.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column2.jpg')}} src={'./images/column2.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column4.png')}} src={'./images/column4.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column1.png')}} src={'./images/column1.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/column5.jpeg')}} src={'./images/column5.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/art01.jpg')}} src={'./images/art01.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/art03.jpeg')}} src={'./images/art03.jpeg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> {props.onClickImg('./images/art07.jpeg')}} src={'./images/art07.jpeg'}></C.ArtColumn>
         </C.RightWrapper>
        </C.BodyWrapper>
        </>
   
    )
}