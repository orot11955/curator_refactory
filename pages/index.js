import React, { Component } from "react";
import * as C from '../styles/emotion'
import LayoutBodyHeader from "../src/components/commons/layout/body/body.artist.presenter";
import LayoutBodySlide from "../src/components/commons/layout/body/body.slide.container";
import LayoutBodyArts from "../src/components/commons/layout/body/body.arts.container";

// 메인 홈페이지 
// 실제적인 페이지 접속 구간  (유지보수를 위해 , 셋팅 - 페이지접속 - 컨테이너 - 프레젠터)

export default function Main() {
  return (
  <>
    <C.Wrapper>
      <LayoutBodyHeader/>
      <LayoutBodySlide/>
      <LayoutBodyArts/>
    </C.Wrapper>
  </>

  );
}



