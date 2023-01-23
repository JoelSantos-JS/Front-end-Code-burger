import {  ContainerItems, LoginContainer,LoginImage,Button, Label,Input,SignInLink } from "./style"
import logoImg from '../../assets/9 1.svg'
import logo from '../../assets/logo.svg'
function Login() {
  return ( 
  
  <LoginContainer>

    <LoginImage src={logoImg} alt='login-image' />
    <ContainerItems>
    <img src={logo} alt='logoBurger' />
    <h1>Login</h1>

    <Label>Email</Label>
    <Input/>
    <Label>Senha</Label>
    <Input/>

    <Button>SignIn</Button>
    <SignInLink>Nao possui Conta ? <a>SignUp</a></SignInLink>
    </ContainerItems>
  </LoginContainer>

  )
}

export default Login
