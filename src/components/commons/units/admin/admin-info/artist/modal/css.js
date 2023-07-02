import styled from "@emotion/styled";

/* 모달창을 화면 중앙. 최상단에 노출 */
export const container = styled.div`
 /* 모달창 크기 */
  width: 580px;
  height: 560px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
`

export const close = styled.button`
/* 모달창 내부 X버튼 */
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 1px 4px;
`

//모달창 테이블
export const ModalWrapper = styled.div`
    width: 500px;
    height: 600px;
    box-sizing: border-box;
    padding: 60px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
`
export const Label = styled.label`
    width: 400px;
    font-size: 16px;
    color: rgba(0,0,0,0.8);
`
export const Input = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 15px;
    border: 2px solid rgba(0,0,0,0.4);
`
export const InputFile = styled.input`
    width: 400px;
    height: 25px;
`

export const InputNumber = styled.input`
    width: 150px;
    height: 25px;
    margin: 0 auto 0 15px;
`

export const Btn = styled.button`
    width: 150px;
    height: 45px;
    font-size: 16px;
    margin: 0 10px 0 auto;
    border: none;
    background-color: #364D79;
    border-radius: 10px;
    color: white;
`