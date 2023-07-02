import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import * as C from './body.slide.styled'

export default function LayoutBodySlideUI(props) {

    return (
        <>
        <C.FootTitle>Exhibition</C.FootTitle>
        <C.DivDiv>
          <C.LeftBtn onMouseEnter={props.slideLeft}><FontAwesomeIcon icon={faAngleLeft}/></C.LeftBtn>
        <C.Div>
         <C.FootWrapper id='slide'>
            <C.ExhibitionImage1>
               <C.ExhibitionTitle1>기안84<br/>제 1회 개인전</C.ExhibitionTitle1>
               <C.ExhibitionSubTitle1>
                  2021년 복학왕의 마지막 회차를 끝으로 
                  웹툰연재라는 긴 여정을 마무리한 기안84는 그동안 구축해 온 세계관 속
                  구성요소의 역할을 재해석하여 새롭게 확장되는 스토리를
                  ‘캔버스’ 위에서 다시한번 연재하려고 한다.
               </C.ExhibitionSubTitle1>
            </C.ExhibitionImage1>
            <C.ExhibitionColumn>
               <C.ExhibitionInfo>
               <C.InfoTitle>전시명</C.InfoTitle>
               <C.Info>기안84 제 1회 개인전</C.Info>
               <C.InfoTitle>기간</C.InfoTitle>
               <C.Info>2022. 03. 26 (토) - 2022. 04. 05 (화)
               INVITATION ONLY : 2022. 03. 25 (금)</C.Info>    
               <C.InfoTitle>장소</C.InfoTitle>
               <C.Info>슈페리어 갤러리 (Superior Gallery)
               서울특별시 강남구 테헤란로 528
               슈페리어타워 B1</C.Info>
               <C.InfoTitle>전시 및 작품 문의</C.InfoTitle>
               <C.Info>스타트아트코리아 02-3486-1110</C.Info>    
               </C.ExhibitionInfo>
            </C.ExhibitionColumn>
         </C.FootWrapper>
     
         <C.FootWrapper id='slide'>
            <C.ExhibitionImage2>
               <C.ExhibitionTitle2>김세동(Sambypen) <br/>7th 개인전 'QUIZ'</C.ExhibitionTitle2>
               <C.ExhibitionSubTitle2>
                  &lt; Solo Exhibition QUIZ &gt;<br/>
                  작가의 일곱 번째 개인전으로, 수년간 작품 활동을 이어오며 직,간접적으로 경험하고 고민했을 수많은 감정과 상황 그리고 개념들에 관한 현재 작가의 솔직한 모습을 담고 있다.
               </C.ExhibitionSubTitle2>
            </C.ExhibitionImage2>
            <C.ExhibitionColumn>
               <C.ExhibitionInfo>
               <C.InfoTitle>전시명</C.InfoTitle>
               <C.Info>QUIZ</C.Info>
               <C.InfoTitle>기간</C.InfoTitle>
               <C.Info>2022. 02. 18 (금) - 2022. 03. 31 (목)
               오전 11시 ~ 오후 8시 , 휴무일 없음</C.Info>    
               <C.InfoTitle>장소</C.InfoTitle>
               <C.Info>십화점 (서울 강남구 선릉로 162길 5 1층)</C.Info>
               <C.InfoTitle>전시 및 작품 문의</C.InfoTitle>
               <C.Info>sambypen DM 또는 info@10dept.com</C.Info>
               </C.ExhibitionInfo>
            </C.ExhibitionColumn>
            </C.FootWrapper>
         </C.Div>
           <C.RightBtn onMouseEnter={props.slideRight}><FontAwesomeIcon icon={faAngleRight}/></C.RightBtn>
         </C.DivDiv>
        </>
    )
}