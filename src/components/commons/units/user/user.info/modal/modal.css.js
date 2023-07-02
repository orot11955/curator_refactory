import styled from "@emotion/styled";

/* 모달창을 화면 중앙. 최상단에 노출 */
export const container = styled.iframe`
 /* 모달창 크기 */
  width: 500px;
  height: 500px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`

export const close = styled.button`
/* 모달창 내부 X버튼 */
  position: absolute;
  right: 10px;
  top: 10px;
`