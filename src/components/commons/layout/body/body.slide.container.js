import LayoutBodySlideUI from './body.slide.presenter'
import { useState } from 'react';
import { useEffect } from 'react';

export default function LayoutBodySlide() {

  const [isSlide, setIsSlide] = useState();

  useEffect(()=>{
     setIsSlide(document.getElementById('slide'));
   }, [])

  const slideLeft = () => {
      isSlide.style.marginLeft = '0px';
  }

  const slideRight = () => {
    isSlide.style.marginLeft = '-1400px';
  }

    return (
        <>
         <LayoutBodySlideUI
            isSlide={isSlide}
            slideLeft={slideLeft}
            slideRight={slideRight}
         />
        </>
    )
} 
