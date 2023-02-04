
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import Button from '../../../components/Button'
import { SidebarAdmin } from '../../../components/SideMenuAdmin'
import api from '../../../services/api'
import {yupResolver} from '@hookform/resolvers/yup'
import { Container,Label , Input ,SuperContainer,ButtonStyles,LabelUpload,ErrorMessage} from './styles'
import {FaUpload} from 'react-icons/fa'

import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function NewProducts() {
    const [fileName , setFileName] = useState(null)
    const [categories ,  setCategories] = useState()
    const navigate = useNavigate()




    const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatorio'),
        price: Yup.string().required('Digiteo preço do produto'),
        category: Yup.object().required('Escolha um categoria'),
        
    })

    const { register,control ,  handleSubmit,  formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])

        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falhao ao enviar'
        })
        setTimeout(() => {
            navigate('/produtos')
        },8000)
        
      }
    
    useEffect(() => {
        async function loadCategories() {
        const {data} = await api.get('categories')


        setCategories(data)
        } 
        loadCategories()
    }, [])


  return (
    <SuperContainer>
           <SidebarAdmin/>
    <Container>
     
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Label>Nome</Label>
        <Input type='text' {...register("name")}  error={errors.name?.message} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

    <div>
    <Label>Preço</Label>
            <Input type='number' {...register("price")} error={errors.price?.message}/>
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
    </div>
            <div>
            <LabelUpload>
                {fileName || (
                    <>
                        <FaUpload size={32}/>
                        Coloque Sua Imagem
                    </>
                )}
            
            <input type='file' {...register("file")}  onChange={value => setFileName(value.target.files[0]?.name) } accept='image/png , image/jpeg , image/jpg'/>
           
            </LabelUpload>
            <Controller name='category' control={control} render={({field}) => {
                return (
                    
                    <ReactSelect {...field} options={categories } error={errors.category?.message} getOptionLabel={cat =>  cat.name}  getOptionValue={cat => cat.id}  placeholder='... Escolha a categoria'/>
                    
                   

                )
            }}>            
            </Controller>
            </div>
       
         
            <ButtonStyles >Adicionar Produto</ButtonStyles>
            </form>
    </Container>
    </SuperContainer>
  )
}

export default NewProducts