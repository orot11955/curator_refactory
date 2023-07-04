import ServiceBoardView from './board.view.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.view.styles'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CommentView from '../../../admin/comment/comment.presenter'

export default function ServiceBoardViewContainer() {

  const router = useRouter();
  const [helpView, setHelpView] = useState();
  const back = process.env.NEXT_PUBLIC_URI
  const serviceSeq = router.query.board

  useEffect(() => {    
    const back = process.env.NEXT_PUBLIC_URI
    axios.get(`${back}helpView?helpSeq=${serviceSeq}`)
    .then((res) => {
        setHelpView(res.data);
    })
  },[])


  const onClickList = () => {
    router.push('/menu/service.center');
  }
    
    return (
        <>
         <ServiceBoardView
            router={router}
            helpView={helpView}
            back={back}
            serviceSeq={serviceSeq}
            onClickList={onClickList}
         />
        </>
    )
}
  
