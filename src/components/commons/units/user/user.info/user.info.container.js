import UserInfoUI from "./user.info.presenter"
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


export default function UserInfo() {

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
        <UserInfoUI
            router={router}
            grade={grade}
            nickName={nickName}
            id={id}
            memberSeq={memberSeq}
            back={back}
            modalOpen={modalOpen}
            data={data}
            cartList={cartList}
            artistList={artistList}
            helpList={helpList}
            purList={purList}
            kakao={kakao}
            modalShow={modalShow}
            onClickHelp={onClickHelp}
            onClickBuy={onClickBuy}
            showModal={showModal}
            onClickDel={onClickDel}
            fetchCartData={fetchCartData}
            onLoadImg={onLoadImg}
            onClickMove={onClickMove}
        />
        </>
    )
}