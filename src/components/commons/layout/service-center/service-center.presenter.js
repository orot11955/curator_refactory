import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import * as C from './service-center.styles' 


export default function LayoutServiceCenter(props) {
 
  return (
    <>  
      <C.ServiceCenter>
        <C.CenterTitle>고객지원</C.CenterTitle>
        <C.CenterSubTitle><FontAwesomeIcon icon={faHeadset}/> &nbsp;고객센터 ㅣ 02) 1234-1234</C.CenterSubTitle>
        <C.CenterDayOn>평일 &nbsp; 09:00 ~ 18:00</C.CenterDayOn>
        <C.CenterDayOff>토/일요일, 공휴일 휴무</C.CenterDayOff>
      </C.ServiceCenter>
    </>
  )
}