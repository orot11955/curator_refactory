import styled from "@emotion/styled";



export const Icon = styled.div`
    color: green;
    margin-right: 5px;
`
export const IconF = styled.span`
    color: tomato;
    margin-right: 5px;
`
// Login SignUp

export const Wrapper = styled.div`
    width: 1400px;
    height: 980px;
    margin: auto;
`
export const SignUpForm = styled.form`
    width: 460px;
    height: 660px;
    padding: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 45px auto;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
`
export const SignUpTitle = styled.span`
    width: 120px;
    height: 80px;
    font-size: 22px;        
    margin: auto;
`

export const SignUpInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid white;
`
export const SectionColumn = styled.div`
    height: 110px;
`

export const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0 5px;
`

export const ErrorMsg = styled.div`
    display: flex;
`

export const Label = styled.div`
    font-size: 15px;
    margin: 5px 0 10px 0;
    opacity: 75%;
`    
export const Email = styled.input`
    width: 195px;
    height: 30px;
    margin-bottom: 10px;
    
    border: none;
    border-bottom: 1px solid gray;
`
export const Domain = styled.select`
    width: 155px;
    height: 25px;
    margin-left: 10px;
`
export const Button = styled.button `
    width: 73px;
    height: 27px;
    font-size: 14px;
    margin-left: 6px;
    border: 2px solid  #364D79;
    background-color: white;
`
export const EmailCheck = styled.div`
    width: 455px;
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 14px;
`
export const EmailToken = styled.input`
    width: 149px;
    height: 20px;
    margin-left:  auto;;
    padding-left: 4px;
    font-size: 14px;
    
`
export const BtnToken = styled.button`
    width: 73px;
    height: 27px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 5px;
    background-color: #364D79;
    color: white;
`

export const Name = styled.input`
    width: 150px;
    height: 30px;
    border: none;
    border-bottom: 1px solid gray;
`
export const NicName = styled.input`
    width: 150px;
    height: 30px;       
    border: none;
    border-bottom: 1px solid gray;
`
export const Tel = styled.input `
    width: 100px;
    height: 30px;       
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
    text-align: center;
`

export const Password = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
`
export const RePassword = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
` 
export const Addr = styled.input`
    width: 74%;
    height: 30px;
    margin: 0 10px 20px 0;
    border: none;
    border-bottom: 1px solid gray;
` 
export const AddrBtn = styled.button`
    width: 100px;
    height: 28px;
    font-size: 14px;
    margin-left: 6px;
    border: 2px solid #364D79;
    background-color: white;
`

export const LoginCheck = styled.input`
    margin-right: 5px;   
`
export const SignUpCheck = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    margin: 5px;
`
export const SignUpBtn = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;;
    }
    font-size: 16px;
    width: 200px;
    height: 47px;
    margin: 25px auto 0;
    border: none;
`
