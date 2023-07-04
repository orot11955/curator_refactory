import ServiceBoardEditView from './board.edit.presenter';
import * as C from './board.edit.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function ServiceBoardEdit() {
    
  const router = useRouter();
  const [helpView, setHelpView] = useState();
  const [helpSeq, setHelpSeq] = useState();
  const back = process.env.NEXT_PUBLIC_URI

  useEffect(async() => {    
    const back = process.env.NEXT_PUBLIC_URI
    if(router.query.board) {
    await axios.get(`${back}helpView?helpSeq=${helpSeq}`)
    .then((res) => {
      setHelpView(res.data);
    })
  }
  },[])

    return (
        <>
         <ServiceBoardEditView
            router={router}
            helpView={helpView}
            helpSeq={helpSeq}
            back={back}
         />
        </>
    )
}
  
