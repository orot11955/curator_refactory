import styled from "@emotion/styled";

//관리자 정보 ( 전시회 등록 )
export const Wrapper = styled.div`
    width: 1300px;
    height: auto;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`
export const ExhibitionWrapper= styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
`
export const AdminTitle = styled.div`
    font-size: 22px;
    padding: 26px;
    color: #1355BD;
    font-weight: bold;
`

export const MemberBtn = styled.div`
    width: 100px;
    height: 30px;
    margin: 10px 0 0 auto ;
`


// 게시판
export const BoardForm = styled.form`
    width: 800px;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const InputWrapper = styled.div`
    width: 800px;
    height: 45px;
    display: flex;
    align-items: center;
`

export const Label = styled.label`
    width: 70px;
    font-size: 15px;
    font-weight: 500;
    margin: 5px 10px 8px 0;
`
export const ExhibitionTitle = styled.input `
    width: 300px;
    height: 23px;
`
export const ExhibitionFile = styled.input`
    width: 300px;
    height: 23px;
    
`
export const ExhibitionDate = styled.input`
    width: 300px;
    height: 23px;
`
export const ExhibitionContent = styled.textarea`
    width: 800px;
    height: 100px;
    resize: none;
`
export const ContentWrapper = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BtnWrapper = styled.div`
    width: 230px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
`
export const SubmitBtn = styled.button`
    cursor: pointer;
    width: 105px;
    height: 37px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
`
export const CancelBtn = styled.button`
    width: 105px;
    margin-right: 10px;
    border: 3px solid navy;
    background-color:  white;
    border-radius: 8px;
`

