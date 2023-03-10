import {  ContainerItems, LoginContainer,LoginImage, Label,Input,SignInLink,ErrorMessage } from "./style"
import logoImg from '../../assets/9 1.svg'
import logo from '../../assets/logo.svg'
  import {useForm} from 'react-hook-form'
import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'
import Button from "../../components/Button";
import { Link, NavLink , useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

import {  toast } from 'react-toastify';



function Login() {
  const {userData ,putUserData} = useUser()
  const navigate = useNavigate()




  const schema = yup.object().shape({
    email: yup.string().email("Please enter email correct").required(),
    password: yup.string("Please enter password correct").required().min(6,"password must have 6 characters"),
  }).required();

  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async clientData => {

    try {
      const {data} =  await api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
         
      })
         
      putUserData(data)
      toast.success('Logado com sucesso', {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        

        setTimeout(() => {
          if(data.admin){
            navigate('/admin')
          }else {
            navigate('/')
          }
         
        
        },1200)

        
        
      
    } catch (error) {
      toast.error('🦄 Deu erro', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  
    }



  }






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


    <Link to='/register' style={{textDecoration: "none"}}>
    <SignInLink>Nao possui Conta ? <span>SignUp</span></SignInLink>
    </Link>
    
    </ContainerItems>
  </LoginContainer>

  )
}

export default Login
