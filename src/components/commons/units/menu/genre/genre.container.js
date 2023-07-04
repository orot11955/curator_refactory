import GenreView from "./genre.presenter"
import { useState, useEffect } from 'react'
import axios from 'axios';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './genre.styles'
import { useCallback } from 'react';
import { isAbsolute, relative } from 'path';
import { useRouter } from 'next/router';
import { data } from "jquery";


export default function GenreMenu() {

    const back = process.env.NEXT_PUBLIC_URI

    const [genreList, setGenreList] = useState([]);
    const [postList, setPostList] = useState([]);
    const [mapping, setMapping] = useState([]);
    const [file, setFile] = useState();
    const router = useRouter();
    var imageArray = [];
    var array;
    var dataArr; 
 
    
     // 장르명 get
   useEffect(() => {
    axios.get(`${back}genreList`)
      .then((res) => {
        setGenreList(res.data);
      })
 
    axios.get(`${back}postList`) 
      .then((res) => {
         setMapping(res.data)   
      })
    }, [])
 
    const onClickPostAll = async () => {
       setMapping([])
       axios.get(`${back}postList`) 
       .then((res) => {
          setMapping(res.data)   
       })
    }
  
    const onClickPost = async (genreSeq) => {  
       await axios.get(`${back}genreView?genreSeq=${genreSeq}`)
       .then((res) => {
          setMapping(res.data)
       })
    }
 
    const onClickContent = async (postAuction, postSeq) => {
       router.push(`/units/content/${postAuction}/${postSeq}`)
    }

    return (
        <>
        <GenreView
            back={back}
            genreList={genreList}
            postList={postList}
            mapping={mapping}
            file={file}
            router={router}
            imageArray={imageArray}
            array={array}
            dataArr={dataArr}
            onClickPostAll={onClickPostAll}
            onClickPost={onClickPost}
            onClickContent={onClickContent}
        />
        </>
    )
}