import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as C from './footer.styles' 
import LayoutServiceCenter from '../service-center/service-center.presenter'

export default function LayoutFooter(props){

    return (
        <C.FooterWrapper>
         <C.CompanyInfo>
            <C.CompanyLogo>Art Website</C.CompanyLogo>
            <LayoutServiceCenter/>
            <C.CompanySns>
                <C.Icon></C.Icon>
                <C.Icon></C.Icon>
                <C.Icon></C.Icon>
                <C.Icon></C.Icon>
            </C.CompanySns>
            <C.Copyright>Copyright &copy; 2023 KoreaIT CodeFactory Family</C.Copyright>
         </C.CompanyInfo>  
        </C.FooterWrapper>
    )
}