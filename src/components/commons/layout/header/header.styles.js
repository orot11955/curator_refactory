import styled from "@emotion/styled";


export const HeaderWrapper = styled.div`
    width: 1400px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: center;
`

export const MainTitle = styled.div`
    margin: 50px auto 5px;
    font-size: 60px;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 30px 0 10px;
    color: darkorange;
`
export const SubTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
    margin: auto;
`
export const MyProfile = styled.div`
    width: 1400px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 15px;
    margin: 60px 0 10px;
`
export const SignInMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
    margin: 0 10px;
`
export const SignupMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
    margin: 0 10px;
    
`
export const InfoMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
   margin: 0 10px;
`

export const MyName = styled.div``


export const MyImage = styled.div`
    width: 40px;
    height: 40px;
    background-color: pink;
    border-radius: 20px;
    margin: 0 10px;
`
export const Navigator = styled.div`
    border: 1px white solid;
    display: flex;
    justify-content: center;
    
    border-top: 1px solid rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(0,0,0,0.2);
`
export const Menu = styled.div`
    &:hover{
        font-weight: bold;
    } 
    font-size: 20px;
    margin: 15px 65px;
`

