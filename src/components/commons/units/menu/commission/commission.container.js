import CommissionMenuUI from "./commission.presenter";
import Link from 'next/link';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import * as C from './commission.styles' 
import { useRouter } from 'next/router';


export default function CommissionMenu() {

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
        <CommissionMenuUI
            router={router}
            back={back}
            commissionList={commissionList}
            commArray={commArray}
            firData={firData}
            CommissionList={CommissionList}
            getToday={getToday}
            onClickMove={onClickMove}
        />
        </>
    )
}