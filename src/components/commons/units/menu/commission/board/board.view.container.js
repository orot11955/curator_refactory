import CommissionBoardView from './board.view.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import * as C from './board.view.styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommissionBoardViewContainer() {

  const router = useRouter();
  const [commissionView, setCommView] = useState();
  const back = process.env.NEXT_PUBLIC_URI
  const [commSeq, setCommSeq]  = useState(router.query.board);
  
  useEffect(() => {
    const back = process.env.NEXT_PUBLIC_URI
    axios.get(`${back}commissionView?commSeq=${commSeq}`)
      .then((res)=>{
        setCommView(res.data);
    })
  },[])

  const onClickEdit = () => {
    router.push('http://localhost:3000/menu/commission/board/edit');
  }
  const onClickList = () => {
    router.push('http://localhost:3000/menu/commission');
  }
    
    return (
        <>
         <CommissionBoardView
            router={router}
            commissionView={commissionView}
            back={back}
            commSeq={commSeq}
            onClickEdit={onClickEdit}
            onClickList={onClickList}
         />
        </>
    )
}
  
