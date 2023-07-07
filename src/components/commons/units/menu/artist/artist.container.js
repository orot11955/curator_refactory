import ArtistMenuUI from './artist.presenter' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './artist.styles'
import { useEffect, useState, useLayoutEffect, useCallback } from 'react'
import axios from 'axios'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'

export default function ArtistMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const [option , setOption] = useState(160); //초기값 false
  var imageArray = [];
  const back = process.env.NEXT_PUBLIC_URI
  const [mapping, setMapping] = useState([]);
  const [postMapping, setPostMapping] = useState([]);
  const [name, setName] = useState();
  const [isBookmark, setIsBookmark] = useState();
  const [color, setColor] = useState(false);
  const [memberSeq, setMemberSeq] = useState();
  let dataArr;

  useEffect(async() => {
    const back = process.env.NEXT_PUBLIC_URI
    setMemberSeq(sessionStorage.getItem('userSeq'));

    const artist = await axios.get(`${back}artistAllList`) 
    const artistData = artist?.data || [];
    setMapping(artist.data);

  }, [])

  const onLoadBookmark = async (artistSeq, artistName) => {
    const form = {
      artistSeq,
      memberSeq: memberSeq
    }
    console.log(form)
    const load = axios.post(`${back}artistBookmarkGet`, form)
    const loadArray = await Promise.resolve(load);
    console.log(loadArray)
    if(loadArray.data > 0) {
      document.getElementById(artistName).style.color = `#E44C7E`;
    } else {
      document.getElementById(artistName).style.color = `gray`;
    }
  }

  const onClickBook = async (artistSeq, artistName) => {
    const form = {
      artistSeq,
      memberSeq: Number(memberSeq)
    }
    const load = axios.post(`${back}artistBookmarkGet`, form)
    const loadArray = await Promise.resolve(load);
    console.log(loadArray)
    if(loadArray.data > 0) {
      console.log(form)
      axios.post(`${back}bookmarkDelete`, form)
      document.getElementById(artistName).style.color = `gray`;
    } else {
      console.log(form)
      axios.post(`${back}artistBookmark`, form)
      document.getElementById(artistName).style.color = `#E44C7E`;
    }
  }

    return (
        <>
          <ArtistMenuUI
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          option={option}
          imageArray={imageArray}
          back={back}
          mapping={mapping}
          postMapping={postMapping}
          name={name}
          isBookmark={isBookmark}
          color={color}
          memberSeq={memberSeq}
          dataArr={dataArr}
          onLoadBookmark={onLoadBookmark}
          onClickBook={onClickBook}
          />
        </>
    )
}

// react Modal 로 클릭시 창내려오기 