import styled from "@emotion/styled";

//관리자 정보 ( 작품 등록 )
export const Wrapper = styled.div`
    width: 1300px;
    height: 650px;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`
export const WorkWrapper= styled.div`
    width: 100%;
    height: 580px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 30px;
`
export const AdminTitle = styled.div`
    font-size: 22px;
    padding: 30px;
    color: #1355BD;
    font-weight: bold;
`

export const MemberBtn = styled.div`
    width: 100px;
    height: 30px;
    margin: 10px 0 0 auto ;
`

export const Btn = styled.button`
    &:hover {
        background-color: white;
        color: black;
    }

    width: 90px;
    height: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    color: white;
`

// 게시판
export const BoardForm = styled.form`
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: space-between;
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
    margin: 5px 10px 8px 10px;
`
export const WorkTitle = styled.input `
    width: 700px;
    height: 23px;
    border: none;
    border-bottom:  1px solid rgba(0,0,0,0.5);
`
export const WorkFile = styled.input`
    width: 200px;
    height: 25px;
`
export const WorkSummary = styled.input`
    width: 700px;
    height: 23px;
    border: none;
    border-bottom:  1px solid rgba(0,0,0,0.5);
`
export const WorkPrice = styled.input`
    width: 150px;
    height: 20px;
    text-align: end;
`
export const WorkContent = styled.textarea`
    width: 800px;
    height: 100px;
    resize: none;
    `
export const WorkAuction = styled.input``
export const WorkArtist = styled.select`
    width: 180px;
    height: 25px;
    margin-right: 40px;
`
export const WorkGenre = styled.select`
    width: 180px;
    height: 23px;
`

export const WorkExhibition = styled.input``

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
