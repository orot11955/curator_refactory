import * as C from './body.artist.styles' 

export default function LayoutBodyArtistUI(props){

    return (
    <>
      <C.HeadTitle>Best Artist</C.HeadTitle>
      <C.HeaderWrapper>
        <C.LeftWrapper></C.LeftWrapper>
        <C.RightWrapper>
          <C.Column>
          <C.Image1></C.Image1>
          <C.Image2></C.Image2>
        </C.Column>
        <C.Column>
          <C.Image3></C.Image3>
          <C.Image4></C.Image4>
        </C.Column>
      </C.RightWrapper>
      </C.HeaderWrapper>
    </>

    )
}