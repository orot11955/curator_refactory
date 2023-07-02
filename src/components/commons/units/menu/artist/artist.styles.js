import styled from "@emotion/styled";

// 메뉴 - 작가 

export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    margin: auto;
    padding: 40px;   
`
export const ArtistBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto auto 50px;
`
export const ArtistTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 20px 0;
`
export const ArtistSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`
export const ArtistWrapper = styled.div`
    width: 1200px;
    height: auto;
`
// 작가 검색 
export const ArtistSearch = styled.div`
    width: 240px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 55px 20px auto;
`
export const SearchTitle = styled.div`
    width: 200px;
    color: rgba(0,0,0,0.8);
`
export const SearchInput = styled.input`
    height: 20px;
    margin-left: auto;
    border: 2px solid navy;
    border-radius: 10px; 
    text-align: center;
`
export const Icon = styled.div`
    padding: 7px;
    color: navy;
`
// 프로필 칼럼
export const ArtistColumn = styled.div`
    width: 1100px;
    height: 170px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    margin: 0 auto 35px auto;
    padding: 30px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: 0.5s ease-out ; 

    &:hover {
         height: 360px;
    }
`

export const ProfileSection = styled.div`
    width: 1000px;
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Line = styled.div`
    width: 1000px;
    margin: 40px 0 10px;
    border-bottom: 1px dotted rgba(0,0,0,0.2);
`
export const ProfileImage = styled.img`
    width: 165px;
    height: 165px;
    background-position: center;
    background-size: cover;
    border-radius: 80px;
`

export const Heart = styled.div`
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: #E44C7E;
    margin: 0 10px 0 auto;
    position: absolute;
    top: 90px;
    bottom: 10px;
    left: -20px;
    right: 200px;

    &:hover {
        font-size: 25px;
        color: #F30940;
        transition: 0.1s ease-out ; 
    }
`

export const Profile = styled.div`
    width: 140px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
`

export const Name = styled.div`
    font-size: 19px;
    font-weight: 500;
`
export const Email = styled.div`
    font-size: 16px;
    margin-bottom: 8px;
    color: rgba(0,0,0,0.7);
`

export const Sns = styled.div`
    width: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: rgba(0,0,0,0.8);
`
export const Image = styled.div`
    width: 23px;
    height: 23px;
    background-image: url('/images/instagram.png');
    background-position: center;
    background-size: cover;
`

export const ProfileInfo = styled.div`
    width: 655px;
    height: 155px;
`

export const Following = styled.span`
    font-weight: 600;
    color: #F76432;
    margin-right: 15px;
    span{
        color: rgba(0,0,0,0.7);
    }
`

export const Sales = styled.span`
    font-weight: 600;
    color: #F76432;
    
    span{
        color: rgba(0,0,0,0.7);
    }    
`
    
export const Intro = styled.p`
    width: 650px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0,0,0,0.8);
    padding: 16px 0;
    
`

export const History = styled.div`
    padding: 20px;

`
export const HistoryTitleLeft = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: #F6C367;
    margin-bottom: 10px;
`
export const HistoryTitleRight = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: #F6C367;
    margin-bottom: 10px;
`
export const Record = styled.div`
    width: 400px;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0,0,0,0.7);
    
`
// 상세보기 클릭시 
export const Work = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

export const WorkImage = styled.img`
    width: 220px;
    height: 270px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    background-image: url('/images/art07.jpeg');
    background-position: center;
    background-size: cover;
`

export const WorkTitle = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

