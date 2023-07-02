import * as C from './side-nav-admin.styles' 

export default function LayoutSideNavAdminUI(props) {

  return (
    <>  
        <C.Wrapper>
         <C.InfoMenu>
              <C.InfoList>
                  <C.List onClick={props.onClickMember}>회원관리</C.List>
                  <C.List onClick={props.onClickArtist}>작가관리</C.List>
                  <C.List onClick={props.onClickHelp}>문의내역</C.List>
                  <C.List onClick={props.onClickCommission}>작품의뢰내역</C.List>
                  <C.List onClick={props.onClickWork}>작품등록</C.List>
                  <C.List onClick={props.onClickExhibition}>전시회등록</C.List>
              </C.InfoList>
          </C.InfoMenu> 
        </C.Wrapper>
    </>
  )

}