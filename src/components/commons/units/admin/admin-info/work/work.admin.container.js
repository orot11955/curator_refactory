import AdminWorkView from "./work.admin.presenter"
import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useEffect } from 'react'
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

export default function AdminWorkContainer() {

    const router = useRouter();
    const back = process.env.NEXT_PUBLIC_URI
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');
    const [auction, setAuction] = useState('');
    const [exhibition, setExhibition] = useState('');
    const [artistList, setArtistList] = useState([]);
    const [artistSeq, setArtistSeq] = useState();
    const [genreList, setGenreList] = useState([]);
    const [genreSeq, setGenreSeq] = useState();

    //input
    const onChangeTitle = (e)=>{
        const currTitle = e.target.value;
        setTitle(currTitle);
    }

    const onChangeSummary = (e) => {
        const currSummary = e.target.value;
        setSummary(currSummary);
    }
    const onChangePrice = (e) => {
        const currPrice = e.target.value;
        setPrice(currPrice);
    }
    const onChangeContent = (e) => {
        const currContent = e.target.value;
        setContent(currContent);
        console.log(content)
    }
    const onChangeAuction = (e) => {
        console.log(e)
        const currAuction = e.target.value;
        setAuction(currAuction);
    }

    const onChangeExhibition = (e) => {
        const currExhibition = e.target.value;
        setExhibition(currExhibition);
    }
    
    //파일
    const handleChange = useCallback((e) => { 
        if (e.target.files === null) return;

        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }, []);

    //submit
    const handleClick = useCallback(async () => {
        if (!file) return;

        const formData = new FormData();
        await formData.append('artistPostFile', file);
        const uploader = {     
            genreSeq: genreSeq,
            artistSeq: artistSeq,
            exhibitionSeq: 1,
            postTitle: title,
            postSummary: summary,
            postContent: content,
            postPrice: price,
            postAuction: auction,
            postExhibition: exhibition, 
            postEndPrice: price,
        };
        const uploaderString = JSON.stringify(uploader);
        await formData.append('postDTO', new Blob([uploaderString], {type: 'application/json'}));
        console.log(formData)
        await axios.post(`${back}artistPostWrite`, formData, {headers: {'Content-Type': 'multipart/form-data'}})   
            .then((res) => {
                if(res.data == 1) {
                    router.push(`/admin/admin-info/`)
                } else alert('등록에 실패하였습니다.')
            })
    }, [file]);

    const onClickCancel = () => {
        router.push('/')
    }

    //작가 선택 불러오기
    useEffect(() => {
        axios.get(`${back}artistAllList`)
          .then((res) => {
            setArtistList(res.data);
          })
      }, [])

    //장르 선택 불러오기 
    useEffect(() => {
    axios.get(`${back}genreList`)
        .then((res) => {
        setGenreList(res.data);
        })
    },[])
    
    // onSelect
    const onSelectArtist = (e) => {
        const currArtist = e.target.value;
        setArtistSeq(currArtist);
  }

    const onSelectGenre = (e) => {
        const currGenre = e.target.value;
        setGenreSeq(currGenre);
    }


    return (
        <>
         <AdminWorkView
            router={router}
            back={back}
            file={file}
            title={title}
            summary={summary}
            price={price}
            content={content}
            auction={auction}
            exhibition={exhibition}
            artistList={artistList}
            artistSeq={artistSeq}
            genreList={genreList}
            genreSeq={genreSeq}
            onChangeTitle={onChangeTitle}
            onChangeAuction={onChangeAuction}
            onChangeContent={onChangeContent}
            onChangePrice={onChangePrice}
            onChangeExhibition={onChangeExhibition}
            onChangeSummary={onChangeSummary}
            handleChange={handleChange}
            handleClick={handleClick}
            onClickCancel={onClickCancel}
            onSelectArtist={onSelectArtist}
            onSelectGenre={onSelectGenre}
         />
        </>
    )
}