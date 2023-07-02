import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import * as C from './comment.styles'
import { useRouter } from 'next/router';

export default function AdminCommentUI(){

    const back = process.env.NEXT_PUBLIC_URI
    const router = useRouter();
    const [reply, setReply] = useState([]);
    const helpSeq = router.query.board;
    const [comm , setComm] = useState();
    const [memberSeq, setMemberSeq] = useState();
    const [grade, setGrade] = useState(false);

    
    useEffect(() => {
        const back = process.env.NEXT_PUBLIC_URI
        axios.get(`${back}replyView?helpSeq=${helpSeq}`)
        .then((res) => {
            setReply(res.data);
        })
        setMemberSeq(sessionStorage.getItem('userSeq'))
        
        if(sessionStorage.getItem('userGrade') == 2) {
            setGrade(true);
        }

    },[])
    
    const onChangeComm = (e) => {
        const curr = e.target.value;
        setComm(curr);    
    }

    const onClickReply = () => {
        const form = {
            helpSeq: helpSeq,
            memberSeq: memberSeq,
            replyContent: comm,
        }
        console.log(form)
        axios.post(`${back}replyPost`,form)
        .then((res)=>{
            alert('답변 입력이 완료되었습니다.')

            axios.get(`${back}replyView?helpSeq=${helpSeq}`)
                .then((res) => {
                 setReply(res.data);
                 document.getElementById('comment').value = '';
        })
        }) 

    }

    return(
        <C.CommentWrapper>
         <C.CommentTitle>답변</C.CommentTitle>
         <C.Table>
            <thead>
            </thead>
            <tbody>
            {reply?.map((el,i)=>(
            <C.Tr>
                <C.ThTitle>{el.replyContent}</C.ThTitle><C.ThDate>{new Date(el.replyDate).toLocaleString()}</C.ThDate>
            </C.Tr>
            ))}
            </tbody>
         </C.Table>
         {
             grade?
         <><C.Line/><C.Comment id='comment' onChange={onChangeComm}></C.Comment><C.Submit onClick={onClickReply}>확인</C.Submit></>
         :<></>
         }
        </C.CommentWrapper>
    )
}