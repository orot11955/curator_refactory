import React from 'react';
import ServiceView from './service.presenter';
import * as C from './service.styles.js'
import Link from 'next/link'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function ServiceContainer() {

  const router = useRouter();
  const [serviceList, setServiceList] = useState();
  let serviceArray = []
  let firData = []

  const back = process.env.NEXT_PUBLIC_URI


  // 작가명 get
  const ServiceList = async () => {
    const res = await axios.get(`${back}helpAllList`)
        let list;
        console.log(res.data)
        firData = res.data;
        for(let i = 0; i < res.data.length; i++) {
           const response = await axios.get(`${back}getName?seq=${res.data[i].memberSeq}`)
              list = { 
                helpSeq: res.data[i].helpSeq,
                helpTitle: res.data[i].helpTitle,
                helpName: response.data,
                helpContent: res.data[i].helpTitle,
                helpCate: res.data[i].helpCate,
                helpDate: getToday(res.data[i].helpDate),
              }
              serviceArray.push(list);
            }
            setServiceList(serviceArray);
    }
    useEffect(async () => {
        ServiceList();
    }, [])

    function getToday(day){
            var date = new Date(day);
            var year = date.getFullYear();
            var month = ("0" + (1 + date.getMonth())).slice(-2);
            var day = ("0" + date.getDate()).slice(-2);

            return year + "-" + month + "-" + day;
        }

    const onClickMove = (helpSeq) => {
    router.push(`http://localhost:3000/menu/service.center/${helpSeq}`)
    }

    console.log(serviceList)
    console.log(serviceArray)

    
    return (
        <>
         <ServiceView
            ServiceList={ServiceList}
            getToday={getToday}
            onClickMove={onClickMove}
            serviceList={serviceList}
         />
        </>
    )
    
}
  
