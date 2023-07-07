import styled from "@emotion/styled";

// 상품 테이블
export const Table = styled.table `
    width: 380px;
    height: 180px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 1px 1px 3px gray;
    text-align: center;
    font-size: 16px;
`
export const Tr = styled.tr``

export const ThNumber = styled.th`
    width: 30px;
    padding: 15px 23px;   
`
export const Th = styled.th``

export const Number1 = styled.td`
    font-weight: 700;
    color: orange;
`
export const Number2 = styled.td`
    color: silver;
    font-weight: 700;
`
export const Number3 = styled.td`
    color: brown;
    font-weight: 700;
`




export const Td = styled.td``
export const NickName = styled.td``

export const Line = styled.div`
    border-bottom: 2px solid rgba(0,0,0,0.1);
    margin: 70px 20px 0 ;
`

// 상세 페이지 
export const Wrapper = styled.div`
    width: 1200px;
    height: 3200px;
    margin: 50px auto;
`
export const WorkWrapper = styled.div`
    width: 1150px;
    height: 600px;
    margin: auto;
    padding: 40px;  
    border-top : 2px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-evenly;
`

export const WorkSection = styled.div`
    width: 530px;
    height: 580px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const WorkImage = styled.img`
    width: 510px;
    height: 580px;
    align-content: flex-end;
    background-position: center;
    background-size: cover;
`

export const WorkInfo = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
    padding: 30px;
`

export const WorkColumn = styled.div`
    height: 300px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
`

export const WorkTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
`
export const WorkNo = styled.div`
    width: 100px;
    padding: 5px 0;
    margin: 0 0 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #364D79;
`
export const WorkSummary = styled.div`
    width: 100%;
    color: rgba(0,0,0,0.8);
    font-size: 18px;    
    padding: 25px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const WorkMemo = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const WorkPrice = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`


export const WorkSize = styled.div`
    margin-bottom: 10px;
`
export const WorkType = styled.div``

export const Price = styled.div`
    font-size: 17px;
    font-weight: 600;
`
export const WorkBuy = styled.span`
    width: 45px;
    height: 20px;
`

export const WorkDate = styled.div`
    font-size: 14px;
`

export const WorkBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const PriceBtn = styled.input `
    width: 165px;
    height: 25px;
`


export const Btn = styled.button`
    &:hover{
        color: black;
        background-color: white;
    }
    width: 170px;
    height: 47px;
    font-size: 17px;
    color: white;
    background-color: black;
    
`
export const FavoriteBtn = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;   
`
export const WorkContent = styled.div`
    width: 1200px;
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WorkContentImage = styled.div`
    width: 250px;
    height: 200px;
    background-image: url('/images/real.png');
    background-position: center;
    background-size: cover;
`
export const WorkContentBox = styled.div`
    width: 450px;
    height: 80px;
    font-size: 22px;
    line-height: 40px;
    margin: 20px;
`


// 그림 상세 내용 정보
export const WorkArticle = styled.div`
    width:  900px;
    height: 420px;
    box-shadow: 1px 1px 5px gray;
    border-radius: 10px;
`

export const WorkArticleTitle = styled.div`
    width: 900px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: #364D79;
    border-radius: 20px;
    color: white;
 
`
export const Quality = styled.div `
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    line-height: 30px;
`
export const Content = styled.div`
    padding: 15px 10px;
    line-height: 26px;

`

//작가 작품 더보기 
export const ArtistContent = styled.div`
    width: 1200px;
    height: 600px;
    display: flex;
    flex-direction: column;
`
export const ArtistTitle = styled.h1`
    font-weight: 500;
    padding: 80px 0 50px;
`
export const TitleSpan = styled.span`
    font-size: 14px;
    padding: 0 5px;
    border-radius: 10px;
    background-color: orange;
    color: white;
`

export const ArtistArticle = styled.div`
    width: 1200px;
    height: 600px;
    display: flex;
`

export const ArticleImage = styled.a`
    width: 270px;
    height: 350px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    background-image: url('/images/art03.jpeg');
    background-position: center;
    background-size: cover;
    margin: 18px;
    text-decoration: none;
    color: black;
`


// 작가 전시회 더보기 
export const ExhibitionContent = styled.div`
    width: 1200px;
    height: 600px;
    display: flex;
    flex-direction: column;
`

export const ExhibitionTitle = styled.h1`
    font-weight: 500;
    padding: 80px 0 50px;
`
export const ExhibitionArticle = styled.div`
    width: 1200px;
    height: 400px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    border-radius: 20px;

`



