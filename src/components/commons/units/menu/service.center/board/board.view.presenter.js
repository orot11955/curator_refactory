import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.view.styles'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CommentView from '../../../admin/comment/comment.presenter'

export default function ServiceBoardView(props) {

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
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/service.center'}>
                <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
       </C.BoardBanner>
       <C.BoardFormWrapper>

        <C.BoardForm>
          <C.BoardFormTitle>게시글 확인하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Table>
              <thead>
              <C.Tr>
                <C.Th>문의 유형</C.Th><C.Td>{helpView?.helpCate}</C.Td><C.Th>작성 날짜</C.Th><C.Td>{new Date(helpView?.helpDate).toLocaleString()}</C.Td>
              </C.Tr>
              <C.Tr>
                <C.Th>문의 제목</C.Th><C.Td colSpan={3}>{helpView?.helpTitle}</C.Td>
              </C.Tr>
              </thead>
              <tbody>
              <C.TrContent>
                <C.Td colSpan={4}>{helpView?.helpContent}</C.Td>
              </C.TrContent>
              </tbody>
            </C.Table>
          </C.InputWrapper> 
          <C.BtnWrapper>
            <C.ListBtn onClick={onClickList}>목록보기</C.ListBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>

        <CommentView/>
       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}