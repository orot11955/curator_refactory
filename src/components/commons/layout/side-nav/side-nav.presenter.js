import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as C from './side-nav.styles' 


export default function LayoutSideNavUI(props) {

  return (
    <>  
        <C.Wrapper>
         <C.InfoWrapper>
            <C.InfoMenu>
              <C.InfoProfile>
                  <C.ProfileImage></C.ProfileImage>
                  <C.Icon><FontAwesomeIcon icon={faEdit} /> 프로필 변경</C.Icon>
                  <C.User>
                    <C.UserName>{props.nickName}</C.UserName>
                    <C.UserEmail>{props.id}</C.UserEmail>
                  </C.User>
                  <C.Line/>
              </C.InfoProfile>
              <C.InfoList>
                  <C.List onClick={props.onClickScrollInfo}>회원정보</C.List>
                  <C.List onClick={props.onClickScrollPur}>구매내역</C.List>
                  <C.List onClick={props.onClickScrollMark}>즐겨찾기</C.List>
                  <C.List onClick={props.onClickScrollService}>나의문의</C.List>
              </C.InfoList>
          </C.InfoMenu>
          <C.InfoContent>
          <div>{props.children}</div>
          </C.InfoContent> 
         </C.InfoWrapper>
        </C.Wrapper>
    </>
  )

}