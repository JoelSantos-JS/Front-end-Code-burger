import {  ContainerItems, LoginContainer,LoginImage,Button, Label,Input,SignInLink,ErrorMessage } from "./style"
import logoImg from '../../assets/9 1.svg'
import logo from '../../assets/logo.svg'
  import {useForm} from 'react-hook-form'
import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Please enter email correct").required(),
    password: yup.string("Please enter password correct").required().min(6,"password must have 6 characters"),
  }).required();

  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data)



  return ( 
  
  <LoginContainer>

    <LoginImage src={logoImg} alt='login-image' />
    <ContainerItems>
    <img src={logo} alt='logoBurger' />
    <h1>Login</h1>

<form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Label>Email</Label>
    <Input type='email' {...register('email')} error={errors.email?.message}/>
    <ErrorMessage>{errors.email?.message}</ErrorMessage>
    <Label>Senha</Label>
    <Input type='password' {...register('password')} error={errors.password?.message}/>
    <ErrorMessage>{errors.password?.message}</ErrorMessage>

    <Button type="submit" >Sign In</Button>
    </form>
    <SignInLink>Nao possui Conta ? <a>SignUp</a></SignInLink>
    </ContainerItems>
  </LoginContainer>

  )
}

export default Login
