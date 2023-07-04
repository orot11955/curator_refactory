import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import LayoutSideNav from '../../../layout/side-nav/side-nav.container'
import Instagram from '../../../../../../public/icons/instagram.svg'
import * as C from './user.info.styles'
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import ModalBasic from "../../modal"
import ModalMove from "./modal/modal"

export default function UserInfoUI(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNav/>
            <C.InfoWrapper>
            <C.InfoTitle>회원정보</C.InfoTitle>
            <C.Profile>
                <C.MyProfile>
                    <C.MyIcon><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;{props.nickName}</C.MyIcon>
                    <C.MyIcon><FontAwesomeIcon icon={faEnvelope}/>&nbsp;{props.id}</C.MyIcon>                 
                </C.MyProfile>    
            </C.Profile>
                <C.InfoTitle>비밀번호 설정</C.InfoTitle>
            <C.Profile>
                <C.Label>현재 비밀번호 : </C.Label>
                <C.MyPassword type="password"/>
                <C.Label>새 비밀번호 : </C.Label>
                <C.MyPassword type="password"/>  
                <C.BtnModify>수정하기</C.BtnModify>
            </C.Profile>
            <C.InfoTitle>구매내역</C.InfoTitle>
            <C.Profile>
                <C.PaymentWrapper>
                <C.MembershipTable>
                <C.MembershipInfo>혜택정보</C.MembershipInfo>
                <C.MembershipLevel>
                    <C.Level>{props.nickName}님은 [ Lv.{props.grade} 일반회원 ] 입니다. </C.Level>
                    <C.DottedLine></C.DottedLine>
                    <C.Coupon>
                      <span>적립금 0원</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                      <span>예치금 0원</span>
                    </C.Coupon>
                    </C.MembershipLevel>
                </C.MembershipTable>
              {props.purList?.map((el, i) => (
                <>
                <C.MyPayTable key={i}>
                    <C.MyPayColumn1>
                        <C.ProductProfile>
                         <C.Image/>
                        </C.ProductProfile>
                        <C.ProductInfo>
                            <C.ProductTitle>{el.purName}</C.ProductTitle>
                            <C.ProductContent>{el.purAddr}</C.ProductContent>
                            <C.ProductPrice>{el.purDate}</C.ProductPrice>
                        </C.ProductInfo>
                    </C.MyPayColumn1>
                    <C.MyPayColumn2>
                        <C.ProductBtn onClick={props.onClickMove}>배송조회</C.ProductBtn>  {props.modalShow && <ModalMove setModalShow={props.setModalShow} purSeq={el.purSeq} />}
                        <C.ProductBtn onClick={props.onClickHelp}>교환,반품 신청</C.ProductBtn>
                        <C.ProductBtn onClick={props.onClickHelp}>판매자 문의 </C.ProductBtn>
                    </C.MyPayColumn2>
                </C.MyPayTable>
                </>
                ))}
                {/* 장바구니 */}             
                <C.MyWishTitle/>
                <C.MyWishTable>
                    <thead> 
                        <C.Tr>
                            <C.ThTitle colSpan={4}>장바구니</C.ThTitle>
                        </C.Tr>
                        <C.Tr>
                            <C.ThImage>상품이미지</C.ThImage><C.ThInfo>상품정보</C.ThInfo><C.ThPrice>금액</C.ThPrice><C.ThSelect rowSpan={2}>선택</C.ThSelect>
                        </C.Tr>                
                    </thead>
                    <tbody>
                        {props.cartList?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td><img style={{width: 75, height: 75}} src={el.postImageName}></img></C.Td><C.TdSummary>{el.postTitle}</C.TdSummary><C.TdPrice>{el.postEndPrice} 원</C.TdPrice><C.TdBtn onClick={() => props.onClickBuy(memberSeq, el.artistSeq, el.postTitle, el.postPrice, el.postSeq)}>주문하기</C.TdBtn><C.TdBtn onClick={() => props.onClickDel(memberSeq, el.postSeq)}>삭제하기</C.TdBtn>
                        </C.Tr>  
                        ))}    
                        {props.modalOpen && <ModalBasic setModalOpen={props.setModalOpen} kakao={props.kakao} />}
                    </tbody>
                </C.MyWishTable>
                </C.PaymentWrapper>
            </C.Profile>
            <C.InfoTitle>즐겨찾기</C.InfoTitle>
            <C.Profile>
            <C.MyArtistTable>                 
                <thead> 
                </thead> 
                <tbody>
                    {props.artistList?.map((el,i) => (
                    <C.Tr key={i}>
                        <C.TdPlus><FontAwesomeIcon icon={faPlus} color="orange" size="sm"/>&nbsp;{el.artistName}</C.TdPlus><td>&nbsp;&nbsp;</td><C.TdSns>{el.artistSns}</C.TdSns>
                    </C.Tr>
                    ))}
                </tbody>
            </C.MyArtistTable>
            </C.Profile>
            <C.InfoTitle>나의문의</C.InfoTitle>
            <C.Profile>       
            <C.ServiceTable>
                <thead>
                <C.Tr>
                    <C.ThTitle colSpan={2}>나의 문의내역</C.ThTitle>
                </C.Tr>
                </thead>
                <tbody>
                    {props.helpList?.map((el,i) => (
                    <C.Tr key={i}>
                       <C.TdHelpContent>{el.helpContent}</C.TdHelpContent><C.TdHelpDate>{new Date(el.helpDate).toLocaleString()}</C.TdHelpDate>
                    </C.Tr>
                    ))}    
                </tbody>
            </C.ServiceTable>
            </C.Profile >
            </C.InfoWrapper>
        </C.Wrapper>
        </>
    )
}