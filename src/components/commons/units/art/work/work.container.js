import WorkView from "./work.presenter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import * as C from './work.styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ModalBasic from '../../modal'

export default function WorkContainer() {

  const back = process.env.NEXT_PUBLIC_URI
  const router = useRouter();
  const [content, setContent] = useState('');
  const [artist, setArtist] = useState('');
  const [postSeq, setPostSeq] = useState(router.query.art);
  const [kakao, setKakao] = useState('');
  console.log(router.query.art)

  useEffect( async () => {
    const back = process.env.NEXT_PUBLIC_URI
    await axios.get(`${back}postView?postSeq=${postSeq}`)
    .then((res) => {
      setContent(res.data);
      axios.get(`${back}artistInform?artistSeq=${res.data.artistSeq}`)
      .then((res) => {
        setArtist(res.data); 
      })
    })
    
  }, [])

  const onClickCart = () => {
    const map = {
      memberSeq: sessionStorage.getItem('userSeq'),
      postSeq: postSeq
    }
    axios.post(`${back}postCart`, map)
      .then((res) => {
        if(res.data = 1) {
          alert('장바구니에 추가되었습니다.')
        } else alert('장바구니 추가에 실패하였습니다.')

      })
  }

  const onClickBuy = () => {
      const memberSeq = sessionStorage.getItem('userSeq')
      const artistSeq = content.artistSeq
      const postTitle = content.postTitle
      const postPrice = content.postEndPrice
      const postSeq = content.postSeq
   
    
    axios.get(`${back}readyKakaoRequest?memberSeq=${memberSeq}&artistSeq=${artistSeq}&postTitle=${postTitle}&postPrice=${postPrice}&postSeq=${postSeq}`, {headers: {'Access-Control-Allow-Origin':'*'}})
    .then((res) => {
      console.log(res.data)
      setKakao(res.data)
      showModal()
    })
  }

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
      setModalOpen(true);
  };

    return (
        <>
          <WorkView
          back={back}
          router={router}
          content={content}
          artist={artist}
          postSeq={postSeq}
          kakao={kakao}
          onClickCart={onClickCart}
          onClickBuy={onClickBuy}
          modalOpen={modalOpen}
          showModal={showModal}
          />
        </>
    )
}