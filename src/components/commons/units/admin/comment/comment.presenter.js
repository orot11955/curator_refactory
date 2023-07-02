import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import * as C from './comment.styles'
import { useRouter } from 'next/router';

export default function CommentView(props){

    return(
        <C.CommentWrapper>
         <C.CommentTitle>답변</C.CommentTitle>
         <C.Table>
            <thead>
            </thead>
            <tbody>
            {props.reply?.map((el,i)=>(
            <C.Tr key={i}>
                <C.ThTitle>{el.replyContent}</C.ThTitle><C.ThDate>{new Date(el.replyDate).toLocaleString()}</C.ThDate>
            </C.Tr>
            ))}
            </tbody>
         </C.Table>
         {
             props.grade?
         <><C.Line/><C.Comment id='comment' onChange={props.onChangeComm}></C.Comment><C.Submit onClick={props.onClickReply}>확인</C.Submit></>
         :<></>
         }
        </C.CommentWrapper>
    )
}