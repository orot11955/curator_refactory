import styled from "@emotion/styled";

export const BodyWrapper = styled.div`    
    width: 1300px;
    height: 700px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    margin-top : 30px;   
`
export const BodyTitle = styled.h1`
    margin: 140px  auto 0  30px;
    font-size: 42px;
    font-family: serif;
    padding: 5px 0 10px 40px;
    text-shadow: 3px 3px 1px rgba(0,0,0,0.1);
`
export const LeftWrapper = styled.div`
    width: 550px;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BestArt = styled.img`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
`
export const RightWrapper = styled.div`
    width: 685px;
    height: 690px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`
export const ArtColumn = styled.img`
    width: 210px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    border-radius: 10px;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }

`

export const Div = styled.div`
    width: 550px;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
`
