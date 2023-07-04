import AdminInfoExhibitionUI from "./exhibition.admin.presenter"
import * as C from './exhibition.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import React, {useCallback, useState} from 'react';
import axios from 'axios';

export default function AdminInfoExhibition() {

    const back = process.env.NEXT_PUBLIC_URI
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    var date2 = [];

    //input
    const onChangeTitle = useCallback((e)=>{
        const curr = e.target.value;
        setTitle(curr);
    }, [])
    const onChangeContent = useCallback((e) => {
        const curr = e.target.value;
        console.log(curr)
        setContent(curr);
    },[])
    const onChangeDate = useCallback((e) => {
        date2.push(e.target.value);
        setDate(date2);
        console.log(date2);
    },[])



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
        await formData.append('exhibitionBanner', file);
        const uploader = {     
            exhibitionName: title,
            exhibitionDate: date[1] + date[2],
            exhibitionExplain: content
        };
        const uploaderString = JSON.stringify(uploader);
        await formData.append('exhibitionDTO', new Blob([uploaderString], {type: 'application/json'}));
        const res = await axios.post(
            `${back}exhibitionWrite`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            
        if (res.status === 201) console.log(res.data);
    }, [file]);


    return (
        <>
        <AdminInfoExhibitionUI
            back={back}
            file={file}
            title={title}
            date={date}
            content={content}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            onChangeDate={onChangeDate}
            handleChange={handleChange}
            handleClick={handleClick}
        />
        </>
    )
}