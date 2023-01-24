import {  ContainerItems, RegisterContainer,RegisterImage, Label,Input,SignInLink,ErrorMessage } from "./style"
import logo from '../../assets/logo.svg'
import back from '../../assets/back.svg'
  import {useForm} from 'react-hook-form'

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'
import Button from "../../components/Button";
import { Link, NavLink } from "react-router-dom";
import {  toast } from 'react-toastify';




function Register() {
  const schema = Yup.object().shape({
    name: Yup.string("Digite un nome valido").required(),
    email: Yup.string("Digite um Email valido").email().required(),
    password: Yup.string("Digite um password valido").required().min(5),
    confirmPassword: Yup.string("Digite um password valido").required().oneOf([Yup.ref('password')],'as senhas devem ser iguais'),
    
  });


  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async clientData => {

    try {
     const {status} =   await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },{
        validateStatus: () => true
      })


      if(status === 200 || status === 201){
        toast.success('Conta criada com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }

      if(status === 409) {
        toast.error('Email ja cadastrado')
      }
  
 
      
    } catch (error) {
      toast.error('🦄 Deu erro tente novamente', {
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
  
  <RegisterContainer>

    <RegisterImage src={back} alt='login-image' />
    <ContainerItems>
    <img src={logo} alt='logoBurger' />
    <h1>Cadastre-se</h1>

<form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Label error={errors.name?.message} >Nome</Label>
    <Input type='text' {...register('name')} error={errors.name?.message}/>
    <ErrorMessage>{errors.name?.message}</ErrorMessage>
    <Label error={errors.email?.message} >Email</Label>
    <Input type='email' {...register('email')} error={errors.email?.message}/>
    <ErrorMessage>{errors.email?.message}</ErrorMessage>
    <Label  error={errors.password?.message} >Senha</Label>
    <Input type='password' {...register('password')} error={errors.password?.message}/>
    <ErrorMessage>{errors.password?.message}</ErrorMessage>
    <Label  error={errors.confirmPassword?.message}>Confirmaçao da senha</Label>
    <Input type='password' {...register('confirmPassword')} error={errors.confirmPassword?.message}/>
    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
    <Button type="submit" >Sign In</Button>
    </form>
    <Link to='/' style={{textDecoration: "none"}}>
    <SignInLink>Ja possui Conta ? <a>Sign In</a></SignInLink>
    </Link>
    
    </ContainerItems>
  </RegisterContainer>

  )
}

export default Register
