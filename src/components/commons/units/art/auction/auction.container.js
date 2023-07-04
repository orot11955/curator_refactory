import ArtAuctionUI from "./auction.presenter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import * as C from './auction.styles'
import TimerPage from '../../timer'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ArtAuction() {


  const back = process.env.NEXT_PUBLIC_URI
  const router = useRouter();

  const [userSeq, setUserSeq] = useState();
  const [userNickName, setUserNickName] = useState();

  const [content, setContent] = useState();
  const [artist, setArtist] = useState();
  const [postSeq, setPostSeq] = useState(router.query.work);
  const [auction, setAuction] = useState();
  const [price, setPrice] = useState('');
  const [bid, setBid] = useState();
  console.log(router.query.work)

  useEffect( async() => {
    try {
      const back = process.env.NEXT_PUBLIC_URI
      await axios.get(`${back}postView?postSeq=${postSeq}`)
      .then((res) => {
        setContent(res.data);
        setBid(res.data.postPrice)
        axios.get(`${back}artistInform?artistSeq=${res.data.artistSeq}`)
        .then((res) => {
          setArtist(res?.data); 
        })
      })
    
  
      const bidAuction = await axios.get(`${back}auctionView?postSeq=${postSeq}`)
      const bidAuctionData = await Promise.resolve(bidAuction);
        setAuction(bidAuctionData);
        console.log(auction)
        if(bidAuctionData?.data[0]){
          setBid(bidAuctionData.data[0].aucPrice)
        }
        console.log(auction)
      
  
      setUserSeq(sessionStorage.getItem('userSeq'))
      setUserNickName(sessionStorage.getItem('userNickname'))

    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
    
  }, [])

  const onChangePrice = (e) => {
    const currPrice = e.target.value;
    setPrice(currPrice);
  }

  const onClickBid = async() => {
    if(price > bid){
      const form = {
        memberSeq: userSeq,
        artistSeq: content?.artistSeq,
        postSeq: content?.postSeq,
        aucNickname: userNickName,
        aucPrice: price,
      }
      const bid = axios.post(`${back}auctionBid`, form)
      const bidData = await Promise.resolve(bid);

      if(bidData.data === 1) {
        alert('입찰에 성공하였습니다.')
        document.getElementById('bid').value = '';
        bidLoad();
      } else alert('잘못된 금액입니다.')

    } else alert('잘못된 금액입니다.')
  }

  const bidLoad = async() => {
    const bidAuction = axios.get(`${back}auctionView?postSeq=${postSeq}`)
    const bidAuctionData = await Promise.resolve(bidAuction);
      setAuction(bidAuctionData);
      console.log(auction)
      if(bidAuctionData?.data[0]){
        setBid(bidAuctionData.data[0].aucPrice)
      }
  }

    return (
        <>
          <ArtAuctionUI
          back={back}
          router={router}
          userSeq={userSeq}
          userNickName={userNickName}
          content={content}
          artist={artist}
          postSeq={postSeq}
          auction={auction}
          price={price}
          bid={bid}
          onChangePrice={onChangePrice}
          onClickBid={onClickBid}
          bidLoad={bidLoad}
          />
        </>
    )
}