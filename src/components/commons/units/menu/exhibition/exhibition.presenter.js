import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './exhibition.styles' 
import axios from 'axios'
import Image from 'next/image';
import React, {useCallback, useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router';

export default function ExhibitionView(props) {

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
    router.push(`/content/${postAuction}/${postSeq}`);
  }

  return (
    <>  
        <C.Wrapper>
         <C.ExhibitionBanner>
            <C.BannerTitle>전시회 정보 </C.BannerTitle>
            <C.BannerSubTitle>Exhibition</C.BannerSubTitle>
         </C.ExhibitionBanner> 
         <C.ExhibitionWrapper>
            <C.ExhibitionMenu>오늘의 전시회</C.ExhibitionMenu>
            <C.ExhibitionTitle>[ 코리아 IT 아카데미 ]
                <C.ExhibitionSubTitle>{mapping?.exhibitionName} </C.ExhibitionSubTitle>
                <C.ExhibitionDate>{mapping?.exhibitionDate}</C.ExhibitionDate>
                <C.ExhibitionInfo>{mapping?.exhibitionExplain}</C.ExhibitionInfo>
                <C.ExhibitionImage src={mapping?.exhibitionBanner} />
            </C.ExhibitionTitle>            
         </C.ExhibitionWrapper>

          <C.ExhibitionWrapper>
            <C.ExhibitionMenu>작가 전시 정보</C.ExhibitionMenu>
            <C.ExhibitionTitle> 신인 작가 전시회 & 공모전 
            <C.ExhibitionSubTitle>Art Website 에서 작가의 "꿈"을 이루세요.</C.ExhibitionSubTitle>
            </C.ExhibitionTitle> 
              <C.ExhibitionColumn>
              {list?.map((el, i) => (
               <C.Column onClick={()=>onClickImage(el.postAuction,el.postSeq)} key={i}>
                <C.ColumnImage src={el.postImageName}/>
                <C.ColumnInfo>
                 <C.ColumnTitle>{el.postTitle}</C.ColumnTitle>
                 <C.ColumnSubTitle> {} </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>{el.postDate}</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>                     
            ))}
              </C.ExhibitionColumn>              
          </C.ExhibitionWrapper>
        </C.Wrapper>
          <LayoutPageNumber/>
    </>
  )

}