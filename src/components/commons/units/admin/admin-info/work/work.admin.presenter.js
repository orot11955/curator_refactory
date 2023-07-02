import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { CKEditor } from 'ckeditor4-react'
import { useEffect } from 'react'
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

export default function AdminWorkView(props) {
    
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
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.WorkWrapper>
            <C.AdminTitle>작품등록</C.AdminTitle>
            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>작품 제목</C.Label>
                    <C.WorkTitle type="text" onChange={onChangeTitle}/> &nbsp;&nbsp;&nbsp;
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 요약</C.Label>
                    <C.WorkSummary type="text" onChange={onChangeSummary}/> &nbsp;&nbsp;&nbsp;&nbsp;
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 가격</C.Label>
                    <C.WorkPrice type="text" placeholder='0원' onChange={onChangePrice}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>경매</C.Label>
                    <label>Y</label><C.WorkAuction type="radio" name='auction' value={1} onChange={onChangeAuction}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkAuction type="radio" name='auction' value={2} onChange={onChangeAuction}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 유무</C.Label>
                    <label>Y</label><C.WorkExhibition type="radio" name='exhibition' value={1} onChange={onChangeExhibition}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkExhibition type="radio" name='exhibition' value={2} onChange={onChangeExhibition}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작가 선택</C.Label>
                    <C.WorkArtist onChange={onSelectArtist} >
                        <option value={true}>전체</option> 
                        {artistList?.map((el, i) => (
                        <option key={i} value={artistList[i].artistSeq}>{artistList[i].artistName}</option>
                    ))}
                    </C.WorkArtist>
                    <C.Label>장르 선택</C.Label>
                    <C.WorkGenre onChange={onSelectGenre}>
                    <option value={true}>전체</option> 
                        {genreList?.map((el, i) => (
                        <option key={i} value={genreList[i].genreSeq}>{genreList[i].genreName}</option>
                    ))}
                    </C.WorkGenre>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>이미지</C.Label>
                    <C.WorkFile type="file" onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>상세설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.WorkContent onChange={onChangeContent}/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button' onClick={onClickCancel}>취소</C.CancelBtn>
                    <C.SubmitBtn type='button' onClick={handleClick}>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.WorkWrapper>
        </C.Wrapper>
        </>
    )
}