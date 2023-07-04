import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.new.styles'
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';


export default function CommissionBoardNewUI(props) {

  const [artistList, setArtistList] = useState([]);
  const [commContent, setCommContent] = useState("");
  const [artistSeq, setArtistSeq] = useState("");
  
  const router = useRouter();
  const back = process.env.NEXT_PUBLIC_URI


  // 작가명 get
  useEffect(() => {
    axios.get(`${back}artistAllList`)
      .then((res) => {
        setArtistList(res.data);
      })
  }, [])

  const onChangeContent = (event) => {
    const currContent = event.target.value;
    setCommContent(currContent);
    console.log(commContent);
  }

  // onSelect
  const onSelectArtist = (event) => {
    const currArtist = event.target.value;
    setArtistSeq(currArtist);
    console.log(artistSeq)
  }

  // 취소
  const onClickCancel = () => {
    router.push('/menu/commission')
  }

  // 전송 
  //게시물 등록시 메뉴로 안넘어가는 문제 
  const onClickSubmit = () => {
    const commData = {
      memberSeq: sessionStorage.getItem('userSeq'), 
      commTitle: '작품 의뢰 합니다.',
      commContent: commContent,
      artistSeq: artistSeq,
    }
    axios.post(`${back}commissionWrite`, commData)
      .then((res) => {
        console.log(res.data)
        if(res.data == 1) {
          alert('게시글 등록이 완료되었습니다.')
          router.push('/menu/commission')
        } else alert('게시물 등록에 실패하였습니다.')
      })

  }

  

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/commission'}>
              <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
          
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 작성하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv onChange={onSelectArtist} >
              <option value={true}>전체</option> 
              {artistList?.map((el, i) => (
                <option key={i} value={artistList[i].artistSeq}>{artistList[i].artistName}</option>
              ))}
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent onChange={onChangeContent}></C.CommissionContent>
          </C.ContentWrapper>


          <C.BtnWrapper>
            <C.CancelBtn onClick={onClickCancel}>취소</C.CancelBtn>
            <C.SubmitBtn type='button' onClick={onClickSubmit}>작성하기</C.SubmitBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}