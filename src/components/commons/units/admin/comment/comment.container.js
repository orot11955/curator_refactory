import CommentView from "./comment.presenter";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import * as C from './comment.styles'
import { useRouter } from 'next/router';

export default function CommentContainer() {

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

    return (
        <CommentView 
            back={back}
            router={router}
            reply={reply}
            helpSeq={helpSeq}
            comm={comm}
            memberSeq={memberSeq}
            grade={grade}
            onChangeComm={onChangeComm}
            onClickReply={onClickReply}
        />
    )
}