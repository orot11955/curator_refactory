import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 120px auto 0;

    background-color: rgba(0,0,0,0.04);
`

export const CompanyInfo= styled.div`
    width: 1200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const CompanyLogo = styled.div`
    font-size: 25px;
    text-align: center;
    padding: 10px;
    font-family: 'Times New Roman', Times, serif;
    color: rgba(0,0,0,0.8);
`

export const CompanySns = styled.div`
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 0 15px 0 auto;
    
`
export const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    
    &:first-child{
        background-image: url('/images/youtube.png');
        background-position: center;
        background-size: cover;
    }
    
    &:nth-child(2){
        background-image: url('/images/instagram.png');
        background-size: cover;
    }

    &:nth-child(3){
        background-image: url('/images/face.png');
        background-position: center;
        background-size: cover;
    }

    &:last-child{
        background-image: url('/images/naver.png');
        background-position: center;
        background-size: cover;
    }


`
export const Copyright = styled.span`
    height: 15px;
    font-size: 13px;

`