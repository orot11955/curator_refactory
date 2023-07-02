import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
    width: 1400px;
    height: 520px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top : 10px;   
`
export const HeadTitle = styled.h1`
    margin: 60px  auto 0  10px;
    font-size: 42px;
    font-family: serif;
    padding: 5px 0 10px 40px;
    text-shadow: 3px 3px 1px rgba(0,0,0,0.1);
`
export const LeftWrapper = styled.div`
    width: 1040px;
    height: 500px;
    background-image: url('/images/pop02.png');
    background-position: center;
    background-size: cover;
`

export const RightWrapper = styled.div`
    width: 490px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: end;


`
export const Column = styled.div`
    width: 430px;
    height: 250px;
    display: flex;
    justify-content: space-between;
`

export const Image1 = styled.div`
    width: 215px;
    height: 100%;
    background-image: url('/images/pop03.png');
    background-position: center;
    background-size: cover;
`
export const Image2 = styled.div`
    width: 215px;
    height: 100%;
    background-image: url('/images/pop04.png');
    background-position: center;
    background-size: cover;
    
`
export const Image3 = styled.div`
    width: 215px;
    height: 100%;
    background-image: url('/images/pop07.png');
    background-position: center;
    background-size: cover;
`
export const Image4 = styled.div`
    width: 215px;
    height: 100%;
    background-image: url('/images/pop05.png');
    background-position: center;
    background-size: cover;
`


export const FooterWrapper = styled.div`
    width: 1400px;
    height: 500px;
    display: flex;
    margin-top : 30px;
    background-color: green;
`