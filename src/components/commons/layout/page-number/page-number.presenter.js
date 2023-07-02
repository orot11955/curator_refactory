import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import * as C from './page-number.styles' 


export default function LayoutPageNumber(props) {
 
  return (
    <>  
      <C.PageNumber>
        <C.Page><FontAwesomeIcon icon={faChevronLeft}/></C.Page>
        <C.Page>1</C.Page>
        <C.Page>2</C.Page>
        <C.Page>3</C.Page>
        <C.Page><FontAwesomeIcon icon={faChevronRight}/></C.Page>
      </C.PageNumber>
    </>
  )

}