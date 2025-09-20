<h2 align="center"> 🎨 미술품 큐레이터 🖌️ </h2>
<br>
<p> <h4 align="center"> 인지도가 없어 대중들에게 자신의 작품을 소개하기 어려운 작가들을 위한 <br> 
  온라인 미술품 거래 사이트입니다. <br>
  신인 작가 ,노년 작가, 프리랜서들을 위해 작품을 소개하고 판매할 수 있으며, <br> 그 밖에 작가들의 전시회,공모전을 소개하며, <br>다양하고 개성있는 예술인들에게 일반인들도 쉽게 관심을 가질수 있도록 만든 플랫폼입니다. </h4> </p>
<br>
<h3 align="center"> 💻 프로젝트 기간 </h3>
<p align="center"> 2023.05.30 ~ 06.21 </p>
<br>
<h3 align="center"> 📚 사용한 라이브러리 & 프레임워크 </h3>
<p align="center">
<img width="210" alt="스크린샷 2023-07-27 오후 4 00 12" src="https://github.com/m2jung/curator_refactory/assets/104767659/31f1a6d2-d2b4-46a5-84c0-161c2b2721bb">
</p>
<br>
<h3 align="center"> 📌 담당역할</h3>
<p align="center"> useState, useEffect등의 hook 과 Link 태그,router 사용 <br> container와 presenter로 Component 폴더 구조 분리 <br>  Axios를 사용한 백엔드 restAPI 요청,응답 (관리자,회원정보) <br> 로그인 유효성 검사, 에러메세지 출력 </p>
<br>
<hr>
<br>
<h3 align="center"> ✔️ 웹 사이트 전체 메인 화면</h3>
<p align="center"> 웹 사이트의 전체 페이지들을 React emotion-styled를 사용해 구상,구현하였습니다. </p>
<p align="center"> 
  <li align="center">Exhibition (전시회 배너) carousel 기능 </li> 
  <li align="center">Best Art (인기 작품) 클릭시 이미지 크게 출력</li> 
</p>
<p align="center"> <img width="500" alt="스크린샷 2023-07-12 오후 5 33 16" src="https://github.com/m2jung/curator_front/assets/104767659/f94a96a2-a449-4bb6-8ab4-edfccc3179b9"></p>
<hr>
<br>
<h3 align="center"> ✔️ 로그인 / 회원가입 </h3>
<p align="center"> 
  사용중인 이메일이 아닐 경우, 해당 메일로 랜덤 Token 값의 메일을 보내줍니다.<br>
  인증이 완료되면 인증번호 입력 박스가 사라집니다.
  <li align="center">로그인과 회원가입시 유효성 검사를 통해 안내메세지가 출력 </li> 
 
</p>
<p align="center">
<img width="500" alt="스크린샷 2023-07-18 오전 9 55 02" src="https://github.com/m2jung/curator_refactory/assets/104767659/e0057aca-0438-4078-9aa0-f17a969c2255"><img width="363" alt="스크린샷 2023-07-14 오전 10 02 53" src="https://github.com/m2jung/curator_refactory/assets/104767659/fecd602c-b0c2-4251-bb82-c498478a7b87">
</p>
<hr>
<br>
<h3 align="center"> ✔️ 전시회 정보 </h3>
<p align="center"> 작가들의 진행중인 전시회,공모전 정보를 확인할 수 있습니다.
  <li align="center"> 전시회 데이터 axios로 백엔드 restAPI 요청, 응답</li> 
</p>

<p align="center">
<img width="517" alt="스크린샷 2023-07-18 오전 10 43 33" src="https://github.com/m2jung/curator_refactory/assets/104767659/6adb612a-0fa3-4380-aa78-ab2cd18e1b5f">
<img width="477" alt="스크린샷 2023-07-18 오전 10 43 42" src="https://github.com/m2jung/curator_refactory/assets/104767659/5669ad38-ea8d-42b1-bc36-5fa1d02ea195">
</p>
<hr>
<br>
<h3 align="center"> ✔️ 작가 소개</h3>
<p align="center"> 
  인스타그램 프로필을 연상하여 작가의 정보를 알 수 있는 작가 소개 페이지입니다.<br>
  해당 작가 정보 박스에 마우스를 올리면 수상이력, 대표작품 등 더욱 자세한 작가의 이력을 볼 수 있습니다.
  <li align="center"> hover,transition으로 자연스럽고 생동감 있어보이는 반응형 동작을 추가하였습니다.</li>
  <li align="center"> onClick 좋아요 하트 기능, 작가 상세보기 transition </li>
</p>  
<p align="center">
<img width="623" alt="스크린샷 2023-07-18 오전 11 12 04" src="https://github.com/m2jung/curator_refactory/assets/104767659/71015fbb-6403-46ea-a1e7-5c433386d804">
</p>
<hr>
<br>
<h3 align="center"> ✔️ 작품 판매</h3>
<p align="center">
  장르별 작품들을 분류하여, 소비자들이 원하는 작품을 찾기 쉽게하였습니다.<br>
  작품 클릭시, 구매 상세정보 페이지로 이동하며 <br>
  경매로 등록된 작품을 구매하면 구매 상세정보가 경매 모드로 보여집니다.<br>
  작품 구매페이지에서 해당 작가의 다른 작품과 진행중인 전시회를 볼 수 있습니다.
  <li align="center">
      경매작품은 입찰이 가능한 제한시간이 있습니다. timer 기능
  </li>
  <li align="center">
      높은 입찰가격에 따라 순위가 변경됩니다.
  </li>
  
</p>
<p align="center">
<img width="650" alt="스크린샷 2023-07-18 오전 11 24 00" src="https://github.com/m2jung/curator_refactory/assets/104767659/5f8e9117-67ab-484f-93cb-9ffb2226dcbb"> <br>
<img width="315" alt="스크린샷 2023-07-14 오전 10 04 43" src="https://github.com/m2jung/curator_refactory/assets/104767659/50855c2b-b9cf-40c1-8d47-0e7d13e64b22"> <br>
<img width="443" alt="스크린샷 2023-07-18 오전 11 22 18" src="https://github.com/m2jung/curator_refactory/assets/104767659/ff89530a-dfeb-490b-895e-6cce6486fc91"> <br>
<img width="530" alt="스크린샷 2023-07-18 오전 11 22 24" src="https://github.com/m2jung/curator_refactory/assets/104767659/24db125c-59e7-434e-b726-7e4d865693f3">
</p>
<hr>
<br/>
<h3 align="center"> ✔️ 고객문의 게시판 </h3>
<p align="center">
  카테고리별로 문의할 수 있는 고객문의 게시판입니다. <br>
  게시판 형태로 게시글을 작성하고 확인할 수 있습니다.
  <li align="center">
    게시판 데이터 axios로 백엔드 restAPI 요청,응답 
  </li>
    
</p>
<p align="center">
<img width="650" alt="스크린샷 2023-07-18 오전 11 27 41" src="https://github.com/m2jung/curator_refactory/assets/104767659/6352da3c-e5bf-4e48-95f9-9a3abd6099df"><br>
<img width="650" alt="스크린샷 2023-07-18 오전 11 27 58" src="https://github.com/m2jung/curator_refactory/assets/104767659/201acbb9-b907-4a90-9655-29e47d85e393"><img width="650" alt="스크린샷 2023-07-18 오전 11 27 28" src="https://github.com/m2jung/curator_refactory/assets/104767659/28ee593d-ce26-40c4-9ab5-6d3504d3ed68">
  </p>
<hr>
<br>
<h3 align="center"> ✔️ 관리자, 회원정보 </h3>
<p align="center"> 
  관리자 계정으로 로그인시, 관리자 모드로 페이지가 변경됩니다.<br>
  문의 내역의 말풍선 이모티콘 클릭시 Link를 통해 해당 문의게시판으로 이동하여 답변을 달 수 있습니다. <br>
  모든 회원과 작가의 데이터들을 추가, 삭제할 수 있습니다. <br>
  일반 계정으로 로그인시 회원정보에는 장바구니에 담은 작품을 구매할 수 있으며, 내가 문의한 게시글을 볼 수 있습니다. 
  <li align="center">작가, 회원 데이터 axios로 백엔드 restAPI 요청,응답 (데이터 추가,삭제)
  </li>  
</p> 
<p align="center">
<img width="650" alt="스크린샷 2023-07-14 오전 10 06 35" src="https://github.com/m2jung/curator_front/assets/104767659/100e4112-ffa0-4bee-80cd-3b7ba57e41d1"> <img width="650" alt="스크린샷 2023-07-18 오전 11 34 08" src="https://github.com/m2jung/curator_refactory/assets/104767659/e354e3ea-d9c0-4aca-a810-4a222364c447">
<img width="650" alt="스크린샷 2023-07-18 오전 11 58 40" src="https://github.com/m2jung/curator_refactory/assets/104767659/33c5fba3-79c2-4b38-9e62-1d7d24a4f3bd">
</p>
<br>

<p align="center">
  부족한 포트폴리오를 봐주셔서 
  <h3 align="center">감사합니다! </h3>   <br>
</p>
<p align="center">
 <a href="https://github.com/m2jung/travel-front">🚞 두번째 프로젝트 바로가기 🚌 </a>
</p>



