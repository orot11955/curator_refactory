import styled from "@emotion/styled";

export const Link = styled.a `
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
`
// table
export const Table = styled.table`
    height: auto;
`
export const Tr = styled.tr``
export const TrContent = styled.tr`
    height: 390px;
`

export const Th = styled.th`
    width: 120px;
    height: 35px;
    text-align: center;
    border-radius: 4px;
    background-color: #002F9F;
    color: white;
    font-size: 16px;
    font-weight: 500;
`
export const Td = styled.td`
    width: 240px;
    padding-left: 5px;
    border: 1px solid rgba(0,0,0,0.1);
`

// 문의한 게시글 보기 
export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    margin: auto;
    padding: 40px;   
`
export const BoardWrapper = styled.div`
    width: 1200px;
    height: 1100px;
`

export const BoardBanner = styled.div`
    width: 1150px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    margin: auto;
    padding: 0 30px;
`

export const BoardTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 40px 0;
`

export const BoardFormTitle = styled.div`
    font-size: 23px;
    font-weight: 600;
    margin: 50px;
`

export const BoardSubTitle = styled.div`
    font-size: 60px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`
export const Span = styled.span`
    font-size: 20px;
    margin-left: 15px;
`

export const Select = styled.select`
    width: 150px;
    height: 26px;
    margin: 15px;
`

export const BoardForm = styled.form`
    width: 900px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoardFormWrapper = styled.form`
    width: 900px;
    height: 680px;
    display: flex;
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
    margin: 30px auto;
`
export const InputWrapper = styled.div`
    width: 900px;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`
export const Label = styled.label`
    width: 100px;
    font-size: 15px;
    margin: 5px 10px 8px 0;
`
export const Line = styled.div`
    width: 900px;
    margin: 20px 0;
    border: 1px dotted rgba(0,0,0,0.1);
`

// CommissionWrapper
export const CommissionDiv = styled.div`
    width: 200px;
    height: 22px;   
`
export const CommissionTitle = styled.input`
    height: 23px; 
    background-color: #F4F4F4;
    border: none;
`
export const ContentWrapper = styled.div`
    width: 900px;
    height: 300px;
    display: flex;
    flex-direction: column;
`
export const CommissionContent = styled.textarea`
    resize: none;
    height: 300px;
    background-color: #F4F4F4;
    border: none;
    margin-bottom: 15px;
`
export const BtnWrapper = styled.div`
    width: 230px;
    display: flex;
    justify-content: space-between;
    margin: 165px auto;
`
export const ListBtn = styled.button`
    cursor: pointer;
    width: 105px;
    height: 37px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    margin: auto;
`
export const EditBtn = styled.button`
    width: 105px;
    margin-right: 10px;
    border: 3px solid black;
    background-color:  white;
    border-radius: 8px;
`

