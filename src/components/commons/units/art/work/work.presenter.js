import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import * as C from './work.styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ModalBasic from '../../modal'

export default function ArtWorkUI(props) {

  return (
    <>  
      <C.Wrapper>
        <C.WorkWrapper>
          <C.WorkSection>
            <C.WorkImage src={props.content?.postImageName}/>
          </C.WorkSection>
          <C.WorkSection>  
            <C.WorkInfo>
              <C.WorkNo>No.1234</C.WorkNo>
              <C.WorkColumn>
              <C.WorkTitle>{props.content?.postTitle}</C.WorkTitle>  
              <C.WorkSummary>{props.content?.postSummary}</C.WorkSummary>
              <C.Div>
              <C.WorkMemo>
                <C.WorkSize>크기 : 90.8 X 112.8cm</C.WorkSize>
                <C.WorkType>종류 : Acrylic</C.WorkType>
              </C.WorkMemo>
              <C.WorkMemo>
                <C.WorkType>작가 : {props.artist?.artistName}</C.WorkType>
              </C.WorkMemo>       
              </C.Div>              
            </C.WorkColumn>

            <C.WorkPrice>
              <C.Price>금액 {props.content?.postPrice} 원</C.Price>
              <C.WorkDate>등록일자 2023.06.05</C.WorkDate>
            </C.WorkPrice>    
              <C.WorkBtn>
                <C.Btn type='button' onClick={props.onClickCart}>장바구니 <FontAwesomeIcon icon={faCartShopping} /></C.Btn>
                <C.Btn type='button' onClick={props.onClickBuy}>구매하기</C.Btn>
             </C.WorkBtn>
            </C.WorkInfo> 
          </C.WorkSection>
        </C.WorkWrapper>
        {props.modalOpen && <ModalBasic setModalOpen={props.setModalOpen} kakao={props.kakao} />}

        <C.Line/>
        {/* 품질 인증  */}
        <C.WorkContent>
         <C.WorkContentBox>" 모든 작품에 대하여 <b>Art WebSite 가 책임지고 보증합니다.</b> 구매시 작품보증서가 함께 첨부됩니다. "</C.WorkContentBox>
         <C.WorkContentImage/>
        </C.WorkContent>
         
         {/* 그림 상세 내용 */}
         <C.WorkContent>
         <C.WorkArticle>
          <C.WorkArticleTitle> 이 작품에 대하여.. </C.WorkArticleTitle>
          <C.Quality>
            <b>작품명 : </b>{props.content?.postTitle} <br/>
            <b>작가명 : </b> {props.artist?.artistName} <br/>
            <b>제작연도 :</b> 2023 <br/>
            <b>크기 :</b> 90.8 X 112.8cm <br/>
            <b>종류 :</b> Acrylic <br/>
          </C.Quality>
          <C.Content>
            현 네이버 소속 컨셉 일러스트레이터 및 그래픽 아티스트로 활동 중인 범진 작가는 애니메이션 전공으로 웹툰과 일러스트 작업을 꾸준히 활동하면서 대중에 존재감을 드러내기 시작했습니다.<br/><br/>작가의 그림 속 등장하는 오묘한 표정의 인물들은 관객으로 하여금 어느새 혼자 있는 느낌은 사라지고 소소한 위로를 받는 느낌을 줍니다. 일상에서 접하기 쉬운 주제를 아름다운 그림체로 표현하여 인스타그램 팔로워 수가 6만 명에 달할 정도로 팬층이 두터운 작가입니다. 현재 창작활동과 병행하여 미술학도들에게 도움이 되고자 애니메이션 일러스트 및 타블렛 3D 제작 강의, 문화콘텐츠 전문가와의 협업 프로젝트 등 다방면으로 재능을 펼치고 있습니다.</C.Content>
         </C.WorkArticle>
        </C.WorkContent>

        {/* 작가 작품 더보기  */}
        <C.ArtistContent>
          <C.ArtistTitle>같은 작가의 작품 <C.TitleSpan>more+</C.TitleSpan></C.ArtistTitle>
         <C.ArtistArticle>
            <C.ArticleImage href="/art/work"/>
            <C.ArticleImage/>
            <C.ArticleImage/>
            <C.ArticleImage/>
         </C.ArtistArticle>
        </C.ArtistContent>

         {/* 작가 전시회 더보기  */}
         <C.ExhibitionContent>
          <C.ExhibitionTitle>같은 작가의 전시회 <C.TitleSpan>more+</C.TitleSpan></C.ExhibitionTitle>
          <C.ExhibitionArticle>전시회 일정이 없습니다.</C.ExhibitionArticle>
        </C.ExhibitionContent>
      </C.Wrapper>
    </>
  )

}