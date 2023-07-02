import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    margin: auto;
    padding: 40px;   

`
export const ExhibitionBanner = styled.div`
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
export const ExhibitionInfo = styled.p `
    text-shadow: none;
    color: black;
    font-size: 20px;
    padding: 20px;
    margin: 20px;
`

export const ExhibitionWrapper = styled.div`
    width: 1150px;
    height: auto;
    margin: 50px auto 120px;
`
export const ExhibitionMenu = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 7px;
    color: #1355BD;

`
export const ExhibitionTitle = styled.div`
    font-size: 27px;
    color: white;
    text-shadow: 2px 2px 1px black;
    margin: 25px 0 ;
`
export const ExhibitionSubTitle = styled.div`
    font-size: 38px;
    font-weight: 500;
    color: black;
    text-shadow: 1px 1px 1px white;
    margin-top:10px;
    padding-bottom: 30px;
`

export const ExhibitionDate = styled.div`
    border-left: 8px solid #7117FF;
    width: 270px;
    text-align: center;
    color: #7117FF;

    font-size: 28px;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    margin-bottom: 10px;
`
export const ExhibitionBtn = styled.button`
    width: 140px;
    height: 42px;
    background-color: black;
    border-radius: 3px;
    color: white;
    border: none;
    font-size: 17px;
    margin: 10px; 
`
export const ExhibitionImage = styled.img`
    width: 1180px;
    height: 660px;
    background-position: center;
    background-size: cover;
    margin: auto;
`

export const ExhibitionColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    flex-wrap: wrap;
    margin: 40px 0;
    
`
export const Column = styled.div`
    width: 340px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin: 15px;
`
export const ColumnImage = styled.img`
    width: 100%;
    height: 230px;
    background-position: center;
    background-size: cover;
`
export const ColumnInfo = styled.div`
    padding: 15px;
`

export const ColumnTitle = styled.div`
    font-size: 20px;
    padding: 5px;
`

export const ColumnSubTitle = styled.div`
    font-size: 15px;
    padding: 7px 2px;
`

export const ColumnDate = styled.div`
    color: rgba(0,0,0,0.8);
`
export const Btn = styled.button`
    width: 70px;
    height: 25px;
    color: white;
    background-color:  #7117FF;
    border: none;
    margin-right: 10px;
`

export const PageNumber = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 3px;
`
