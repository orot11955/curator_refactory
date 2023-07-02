import styled from "@emotion/styled";

// 메뉴 - 장르 

export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    margin: auto;
    padding: 40px;   
`

export const GenreBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto;
    /* background-image: url('/images/pattern.png');
    background-size: cover;
    opacity: 0.8; */
`
export const BannerTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 20px 0;
`
export const BannerSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`
export const GenreSelect = styled.div`
    width: 1150px;
    height: 20px;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 35px;
`
export const Select = styled.select`
    width: 110px;
    height: 30px;
    margin-left: auto;
    font-size: 15px;

`

export const Genre = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;
    }
    width: 80px;
    height: 32px;
    background-color: white;
    border: 2px solid #364D79;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    padding: 2px;
    
`

// =================
export const GenreWrapper = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
`

export const GenreColumn = styled.div`
    width: 270px;
    height: 390px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    margin: 18px;
    text-decoration: none;
    color: black;
`
export const ColumnImage = styled.img`
    &:hover {
        opacity: 0.2;
        transition: 0.2s ease-in-out; 
    }
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const ColumnInfo = styled.div`
    &:hover {
        z-index: 1;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const ColumnTitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`

export const ColumnContent = styled.div`
    font-size: 15px;
    padding: 30px;
    line-height: 25px;

`
export const ColumnProfile = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-image: url('/images/imageiu.jpg');
    background-position: center;
    background-size: cover;
    margin-right: 5px;
`

export const ColumnArtist = styled.span`
    display: flex;
    font-size: 14px;
    margin:10px;
`

export const ColumnIcon = styled.div`
    color: #FF4B87;
    margin-left: auto;
`

export const ColumnName = styled.span``

export const ColumnPrice = styled.div``

export const PageNumber = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 40px;
    padding: 3px;
`

export const Page = styled.div`
    
`