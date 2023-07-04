import ServiceBoardNewView from './board.new.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.new.styles'
import { CKEditor } from 'ckeditor4-react'
import React, {useCallback, useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ServiceBoardNewContainer() {

  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  const router = useRouter();
  const back = process.env.NEXT_PUBLIC_URI

  const onChangeCat = (event) => {
    const select = event?.target.value;
    setCat(select)
    console.log(cat);
  }

  const onChangeTitle = (event) => {
    const serTitle = event.target.value;
    setTitle(serTitle)
    console.log(title)
  }

  const onChangeContent = (event) => {
    const serContent = event.target.value
    setContent(serContent);
    console.log(content);
  }

    // 취소
    const onClickCancel = () => {
      router.push('http://localhost:3000/menu/service.center')
    }
  
    // 전송
    const onClickSubmit = async() => {
      const serviceData = {
        memberSeq: sessionStorage.getItem('userSeq'),
        helpCate: cat,
        helpTitle: title,
        helpContent: content,
      }
  
      await axios.post(`${back}helpWrite`, serviceData)
        .then((res) => {
          console.log(res.data)
          if(res.data == 1) {
            alert('게시글 등록이 완료되었습니다.')
            router.push('/menu/service.center')
          } else alert('게시물 등록에 실패하였습니다.')
        })
  
    }
    
    return (
        <>
         <ServiceBoardNewView
            cat={cat}
            title={title}
            content={content}
            router={router}
            back={back}
            onChangeCat={onChangeCat}
            onChangeContent={onChangeContent}
            onChangeTitle={onChangeTitle}
            onClickCancel={onClickCancel}
            onClickSubmit={onClickSubmit}
         />
        </>
    )
}
  
