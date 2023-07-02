import styled from "@emotion/styled";

// 메뉴 - 고객센터 
export const Wrapper = styled.div`
    width: 1200px;
    height: 1000px;
    margin: auto;
    padding: 30px;   
`

export const ServiceWrapper = styled.div`
    width: 1200px;
    height: auto;
`

export const ServiceBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 30px;
    margin: auto;
`

export const ServiceTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 20px 0;
`

export const ServiceSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const ServiceBtn = styled.div`
    width: 270px;
    height: 60px;
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: space-between;
`
export const Btn = styled.button`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 35px;
    `
    
export const LinkBtn = styled.a `
    font-size: 16px;    
    text-decoration: none;
    color: white;
`

export const Link = styled.a`
    text-decoration: none;
`

export const Select = styled.select`
    width: 150px;
    height: 30px;
    margin: 15px 5px 0;
    font-size: 15px;
`

// 고객센터 테이블 
export const ServiceTable = styled.div`
    width: 1130px;
    height: auto;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
`
export const Table = styled.table``

export const Tr = styled.tr `
    border: 1px solid rgba(0,0,0,0.1);
    height: 22px;
`
export const Div = styled.td `
    width: 75px;
    color:  #FF7932;
    border: 2px solid #FF8832;
    font-size: 16px;
    font-weight: 700;
    border-radius: 13px;
    text-align: center;
 
`
export const Title = styled.td `
    &:hover {
        text-decoration: underline;
    }   
    font-weight: 500;
    font-size: 19px;
    width: 1000px;
    height: 30px;
    padding-left: 10px;
    line-height: 35px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const Icon = styled.td`
    cursor: pointer;
    text-align: end;
    color: #364D79;
    font-size: 18px;
`

