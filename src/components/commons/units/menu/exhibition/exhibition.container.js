import ExhibitionView from './exhibition.presenter'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './exhibition.styles' 
import axios from 'axios'
import Image from 'next/image';
import React, {useCallback, useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router';

export default function ExhibitionContainer() {

  const router = useRouter();
  const back = process.env.NEXT_PUBLIC_URI
  const [mapping, setMapping] = useState();
  const [list, setList] = useState();

 
  useEffect(() => {
    axios.get(`${back}exhibitionView?exhibitionSeq=1`)
      .then((res) => {
        console.log(res.data)
        setMapping(res.data)
      })
      
      axios.get(`${back}postExhibition?postExhibition=1`)
      .then((res) => {
        console.log(res.data)
        setList(res.data)
      })

  }, []) 

  const onClickImage = (postAuction,postSeq) => {
    router.push(`/units/content/${postAuction}/${postSeq}`);
  }


 return (
        <>
          <ExhibitionView
            router={router}
            back={back}
            mapping={mapping}
            list={list}
            onClickImage={onClickImage}
          />        
        </>
    )

  }