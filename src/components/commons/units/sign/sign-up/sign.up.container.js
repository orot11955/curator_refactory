import SignUpView from ''

export default function SignUpContainer() {

  const [email, setEmail] = useState("")
  const [emailCheck, setEmailCheck] = useState("")
  const [emailToken, setEmailToken] = useState(false)

  const onClickEmailCheck = () => {
    alert('사용가능한 이메일 입니다.')
  } 
  
  const onChangeEmail = (event) => {
      setEmail(event.target.value)
      console.log(email);
  }

  const onClickEmailToken = () => {
      setEmailToken(true)
  }

  const onClickEmailComplete = () => {

  }

    return (
        <>
          <SignUpView/>
        </>
    )
}