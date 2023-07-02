import styled from "@emotion/styled";

//회원정보 전체 Wrapper
export const Wrapper = styled.div`
    width: 410px;
    height: 600px;
`

export const InfoMenu = styled.div`
    width: 280px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`
export const InfoProfile = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InfoList = styled.ul`
    text-align: center;
    font-size: 17px;
    list-style: none;
`
export const List = styled.li`
    &:hover{
        font-weight: bold;
    }
    padding: 25px 0;
`
export const ProfileImage = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: gray;
    margin-top: 30px;
    background-image: url('/images/imageiu.jpg');
    background-position: center;
    background-size: cover;
`

export const Icon = styled.div`
    font-size: 15px;
    color: rgba(0,0,0,0.8);
    padding: 10px;
`

export const User = styled.div`
    width: 140px;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: rgba(0,0,0,0.7);
    
`

export const Line = styled.div`
    width: 85%;
    border-bottom: 3px dotted rgba(0,0,0,0.1);
    margin: 15px 0px 0;
`


export const UserName = styled.div``
export const UserEmail = styled.div``
export const MyPassword = styled.div``

export const InfoContent = styled.div`
    width: 80%;
    height: 100%;
`