import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import LayoutSideNav from '../../../layout/side-nav/side-nav.presenter'
import Instagram from '../../../../../../public/icons/instagram.svg'
import * as C from './user.info.styles'
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import ModalBasic from "../../modal"
import ModalMove from "./modal/modal"

export default function UserInfoView(props) {

    const router = useRouter();
    const [grade, setGrade] = useState();
    const [nickName, setNickName] = useState();
    const [id, setId] = useState();
    const [memberSeq, setMemberSeq] = useState();
    const back = process.env.NEXT_PUBLIC_URI;
    const [modalOpen, setModalOpen] = useState(false);
  
    const [data, setData] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [artistList, setArtistList] = useState([]);
    const [helpList, setHelpList] = useState([]);
    const [purList, setPurList] = useState([]);
    const [kakao, setKakao] = useState('');
    const [modalShow, setModalShow] = useState();

  
    useEffect(() => {
      setNickName(sessionStorage.getItem('userNickname'))
      setId(sessionStorage.getItem('userId'))
      setGrade(sessionStorage.getItem('userGrade'))
      const seq = sessionStorage.getItem('userSeq');
      setMemberSeq(seq);
  
      const fetchCartData = async () => {
        try {
          const response = await axios.get(`${back}cartList?memberSeq=${seq}`);
          const cartData = response?.data || [];
  
          const promises = cartData.map((item) =>
            axios.get(`${back}postView?postSeq=${item?.postSeq}`)
          );
          const cartArray = await Promise.all(promises);
          setCartList(cartArray.map((res) => res?.data));
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };

      const fetchPurchase = async () => {
        try {
          const response = await axios.get(`${back}purchaseProduct?memberSeq=${seq}`);
          const purData = response?.data || [];
  
          const purArray = await Promise.all(purData);
          setPurList(purArray);
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };
  
      const fetchArtistList = async () => {
        try {
          const response = await axios.get(`${back}bookmarkArtistList?memberSeq=${seq}`);
          const bookmarkData = response?.data || [];
  
          const promises = bookmarkData.map((item) =>
            axios.get(`${back}artistInform?artistSeq=${item?.artistSeq}`)
          );
          const artistArray = await Promise.all(promises);
          setArtistList(artistArray.map((res) => res?.data));
        } catch (error) {
          console.error('Error fetching artist list:', error);
        }
      };
  
      const fetchHelpList = async () => {
        try {
          const response = await axios.get(`${back}helpAllList`);
          setHelpList(response.data);
        } catch (error) {
          console.error('Error fetching help list:', error);
        }
      };
  
      fetchPurchase();
      fetchCartData();
      fetchArtistList();
      fetchHelpList();
    }, []);


    const onClickHelp = () => {
        router.push('/menu/service.center/new')
    }

    const onClickWork = () => {
        
    }

    const onClickBuy = (memberSeq, artistSeq, postTitle, postPrice, postSeq) => {
      
      axios.get(`${back}readyKakaoRequest?memberSeq=${memberSeq}&artistSeq=${artistSeq}&postTitle=${postTitle}&postPrice=${postPrice}&postSeq=${postSeq}`, {headers: {'Access-Control-Allow-Origin':'*'}})
      .then((res) => {
        console.log(res.data)
        setKakao(res.data)
        showModal()
      })
    }


    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    const onClickDel = (memberSeq, postSeq) => {
        const form = {
            memberSeq,
            postSeq,
        }
        axios.post(`${back}cartDelete`, form)
            .then((res) => {
                if(res.data == 1) {
                    alert("삭제되었습니다.")
                    fetchCartData();
                }
            })
    }

    const fetchCartData = async () => {
        try {
          const response = await axios.get(`${back}cartList?memberSeq=${memberSeq}`);
          const cartData = response?.data || [];
  
          const promises = cartData.map((item) =>
            axios.get(`${back}postView?postSeq=${item?.postSeq}`)
          );
          const cartArray = await Promise.all(promises);
          setCartList(cartArray.map((res) => res?.data));
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };

      const onLoadImg = async (postSeq, purName) => {
        const image = axios.get(`${back}postView?postSeq=${item?.postSeq}`)
        const imagePro = await Promise.resolve(image);
        document.getElementById(purName).src = imagePro;
      }

    const onClickMove = (purSeq) => {
      setModalShow(true);

    }
    

    return (
        <>
        <C.Wrapper>
        <LayoutSideNav/>
            <C.InfoWrapper>
            <C.InfoTitle>회원정보</C.InfoTitle>
            <C.Profile>
                <C.MyProfile>
                    <C.MyIcon><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;{nickName}</C.MyIcon>
                    <C.MyIcon><FontAwesomeIcon icon={faEnvelope}/>&nbsp;{id}</C.MyIcon>                 
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
                    <C.Level>{nickName}님은 [ Lv.{grade} 일반회원 ] 입니다. </C.Level>
                    <C.DottedLine></C.DottedLine>
                    <C.Coupon>
                      <span>적립금 0원</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                      <span>예치금 0원</span>
                    </C.Coupon>
                    </C.MembershipLevel>
                </C.MembershipTable>
              {purList?.map((el, i) => (
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
                        <C.ProductBtn onClick={onClickMove}>배송조회</C.ProductBtn>  {modalShow && <ModalMove setModalShow={setModalShow} purSeq={el.purSeq} />}
                        <C.ProductBtn onClick={onClickHelp}>교환,반품 신청</C.ProductBtn>
                        <C.ProductBtn onClick={onClickHelp}>판매자 문의 </C.ProductBtn>
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
                        {cartList?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td><img style={{width: 75, height: 75}} src={el.postImageName}></img></C.Td><C.TdSummary>{el.postTitle}</C.TdSummary><C.TdPrice>{el.postEndPrice} 원</C.TdPrice><C.TdBtn onClick={() => onClickBuy(memberSeq, el.artistSeq, el.postTitle, el.postPrice, el.postSeq)}>주문하기</C.TdBtn><C.TdBtn onClick={() => onClickDel(memberSeq, el.postSeq)}>삭제하기</C.TdBtn>
                        </C.Tr>  
                        ))}    
                        {modalOpen && <ModalBasic setModalOpen={setModalOpen} kakao={kakao} />}
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
                    {artistList?.map((el,i) => (
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
                    {helpList?.map((el,i) => (
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