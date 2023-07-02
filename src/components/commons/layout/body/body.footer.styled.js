import styled from "@emotion/styled";

export const DivDiv = styled.div`
    width: 1450px;
    display: flex;
`

export const Div = styled.div`
    width: 1450px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    overflow: hidden;
`
export const LeftBtn = styled.div `
    display: flex;
    align-items: center;
    font-size: 50px;
    z-index: 100;
`
export const RightBtn = styled.div `
    display: flex;
    align-items: center;
    font-size: 50px;
    
`
export const FootTitle = styled.h1`
    margin: 150px  auto  0  10px;
    font-size: 42px;
    font-family: serif;
    padding: 5px 0 10px 40px;
    text-shadow: 3px 3px 1px rgba(0,0,0,0.1);
`
export const FootWrapper = styled.div`
    width: 1338px;
    height: 520px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding: 30px;
    transition: 2s ease-in-out;
    
`
export const ExhibitionTitle1 = styled.h1 `
    color: white;
    font-size: 50px;
    text-shadow: 2px 3px black;
    padding: 20px 0 0 20px;
`
export const ExhibitionSubTitle1 = styled.p`
    width: 500px;
    font-size: 13px;
    color: white;
    margin-left: 20px;
    text-align: start;
    line-height: 20px;
`
export const ExhibitionTitle2 = styled.h1 `
    width: 400px;
    height: 120px;
    margin: 10px 10px 0 auto;
    text-align: end;
    color: white;
    font-size: 50px;
    text-shadow: 2px 3px black;
    padding: 20px;
`
export const ExhibitionSubTitle2 = styled.p`
    width: 350px;
    font-size: 13px;
    color: white;
    text-align: end;
    margin: 0 30px 0 auto;
    text-shadow: 1px 1px gray;
`

export const ExhibitionImage1 = styled.div`
    width: 850px;
    height: 500px;
    background-image: url('./images/exhibition03.png');
    background-position: center;
    background-size: cover;
`
export const ExhibitionImage2 = styled.div`
    width: 850px;
    height: 500px;
    background-image: url('./images/exhibition02.jpg');
    background-position: center;
    background-size: cover;
`


export const ExhibitionColumn = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.04);
    opacity: 0.8;

`
export const ExhibitionInfo = styled.p`
    padding: 40px;
    font-size: 18px;
    
`
export const InfoTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 20px;
`
export const Info = styled.p`
    padding: 10px 0 23px;
`