import styled from "@emotion/styled";

export const LinkBoard = styled.a`
    text-decoration: none;
    color: black;
`


// 메뉴 - 작품의뢰 
export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    margin: auto;
    padding: 30px;   

`
export const CommissionBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 30px;
    margin: auto;
`
export const CommissionTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 20px 0;
`
export const CommissionSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const CommissionWrapper = styled.div`
    width: 1200px;
    height: 600px;
`

// 배너2
export const CommissionTableBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin: auto;
`
export const Message = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 40px;
    color: rgba(0,0,0,0.9);
    font-size: 23px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 35px;
    
    span{
        font-size: 26px;
        font-weight: 700;
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 10px;
    }
`



// 게시판 
export const CommissionTable = styled.div`
    width: 1150px;
    height: auto;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 35px;
`
export const Table = styled.table`
    width: 1150px;
    height: 230px;   
`
export const Tr = styled.tr`
    text-align: center;
    border: 1px solid rgba(0,0,0,0.1);
`
export const Th = styled.th `
    height: 36px;
    background-color: #F76432;
    color: white;
    border-radius: 3px;  
    
`
export const No = styled.td`
   border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 60px;
    height: 32px;
`
export const Title = styled.td `
    &:hover {
        text-decoration: underline;
    }   
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const Writer = styled.td`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 90px;
`
export const Date = styled.td `
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 120px;
`
export const CommissionBtn = styled.div``

export const Btn = styled.button `
    width: 140px;
    height: 40px;
    font-size: 15px;
    margin: 50px 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    text-align: center;
    text-decoration: none;
    color: white; 

    &:hover {
        color: black;
        background-color: white;
    }
`
export const Link= styled.a`
    text-decoration: none;
`

