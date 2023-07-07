import CommissionBoardEditUI from './board.edit.presenter'
import * as C from './board.edit.styles'
import axios from 'axios'
import React, {useCallback, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';


export default function CommissionBoardEdit() {
    
    const back = process.env.NEXT_PUBLIC_URI
    const [artistList, setArtistList] = useState();
    const [artist, setArtist] = useState();
  
    useEffect(() => {
      axios.get(`${back}artistAllList`)
      .then((res) => {
        console.log(res)
        setArtistList(res.data);
      })
  
      // axios.get(`${back}updateView?commseq=${commSeq}`)
      //   .then((res) => {
  
      //   })
    }, [])
  
    const onChangeCate = (event) => {
      const artistName = event.target.value;
      setArtist(artistName);
    }

    return (
        <>
         <CommissionBoardEditUI
            back={back}
            artistList={artistList}
            artist={artist}
            onChangeCate={onChangeCate}
         />
        </>
    )
}
  
