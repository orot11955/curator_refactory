import LayoutSideNavUI from './side-nav.presenter'
import { useState, useEffect } from 'react';

export default function LayoutSideNav() {

  const [nickName, setNickName] = useState();
  const [id, setId] = useState();

  useEffect(() => {
      setNickName(sessionStorage.getItem('userNickname'))
      setId(sessionStorage.getItem('userId'))
  }, [])
 
  const onClickScrollInfo = () => {
    window.scrollTo({
         top: 200,
         behavior: 'smooth',
    });
  }
    const onClickScrollPur = () => {
      window.scrollTo({
           top: 500,
           behavior: 'smooth',
      });
    }

  const onClickScrollMark = () => {
    window.scrollTo({
         top: 1000,
         behavior: 'smooth',
    });
  }

  const onClickScrollService = () => {
    window.scrollTo({
        top: 1400,
        behavior: 'smooth',
    });
  }
  
    return (
        <> 
        <LayoutSideNavUI
        nickName={nickName}
        id={id}
        onClickScrollInfo={onClickScrollInfo}
        onClickScrollPur={onClickScrollPur}
        onClickScrollMark={onClickScrollMark}
        onClickScrollService={onClickScrollService}
        />
        </>
    )
}