import Link from 'next/link';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import * as C from './commission.styles' 
import { useRouter } from 'next/router';

export default function CommissionMenuUI(props){

  const router = useRouter();
  const back = process.env.NEXT_PUBLIC_URI
  const [commissionList, setCommissionList] = useState();
  let commArray = []
  let firData = []

  // const onClickNew = () => {
  //   router.push('/menu/commission/new');
  // }

  // 작가명 get
  const CommissionList = async () => {
    const res = await axios.get(`${back}commAllList`)
        let list;
        console.log(res.data);
        firData = res.data;
        for(let i = 0; i < res.data.length; i++) {
           const response = await axios.get(`${back}getName?seq=${res.data[i].memberSeq}`)
              list = { 
                commSeq: Number(res.data[i].commSeq),
                commName: response.data,
                commTitle: res.data[i].commTitle,
                commDate: getToday(res.data[i].commDate),
              }
              commArray.push(list);
            }
            setCommissionList(commArray);

  }

  useEffect(async () => {
    CommissionList();
  }, [])

  function getToday(day){
    var date = new Date(day);
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

const onClickMove = (commSeq) => {
  router.push(`/menu/commission/${commSeq}`)
}


  return (
    <>  
      <C.Wrapper>
        <C.CommissionBanner>
          <C.CommissionTitle>작품 의뢰</C.CommissionTitle>
          <C.CommissionSubTitle>Commission</C.CommissionSubTitle>
        </C.CommissionBanner>

        <C.CommissionTableBanner>
         <C.Message> 
            <span>Art Website 는</span>
           고객님들의 소중한 작품 의뢰를 기다립니다.
          </C.Message>
        </C.CommissionTableBanner>

        <C.CommissionTable>
          <C.Table>
            <thead>
              <C.Tr>
                <C.Th>No</C.Th><C.Th>제목</C.Th><C.Th>작성자</C.Th><C.Th>날짜</C.Th>
              </C.Tr>
            </thead>
            <tbody>
              <C.Tr>
                <C.No>1</C.No><C.Title> &lt;&lt;공지사항&gt;&gt; 작품의뢰 게시글 양식에 맞게 작성 부탁드립니다. 글제목은 '작품의뢰 합니다.' 작성해주세요.</C.Title><C.Writer>관리자</C.Writer><C.Date>2023-06-07</C.Date>
              </C.Tr>
            {commissionList?.map((el, i) => (
              <C.Tr key={el.commSeq}>
                <C.No>{el.commSeq}</C.No><C.Title onClick={() => onClickMove((el.commSeq))}>{el.commTitle}</C.Title><C.Writer>{el.commName}</C.Writer><C.Date>{el.commDate}</C.Date>
              </C.Tr>    
              ))} 
              </tbody>
            </C.Table>
          <C.Link href='/menu/commission/new'><C.Btn>게시글 작성하기</C.Btn></C.Link>
        </C.CommissionTable>
      <LayoutPageNumber/>
      </C.Wrapper>
    </>
  )
}

