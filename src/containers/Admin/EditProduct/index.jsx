
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import Button from '../../../components/Button'
import { SidebarAdmin } from '../../../components/SideMenuAdmin'
import api from '../../../services/api'
import {yupResolver} from '@hookform/resolvers/yup'
import { Container,Label ,ContainerInput, Input ,SuperContainer,ButtonStyles,LabelUpload,ErrorMessage} from './styles'
import {FaUpload} from 'react-icons/fa'

import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'


function EditProduct() {
    const [fileName , setFileName] = useState(null)
    const [categories ,  setCategories] = useState()
        const navigate  = useNavigate()
        const location = useLocation()
        const product = location.state.product;



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
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Editando novo produto...',
            success: 'Produto Editado com sucesso',
            error: 'Falhao ao Editar'
        })
       
        
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
        <Input type='text' {...register("name")}  error={errors.name?.message} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

    <div>
    <Label>Preço</Label>
            <Input type='number' {...register("price")} error={errors.price?.message} defaultValue={product.price}/>
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
            <Controller name='category' defaultValue={product.category} control={control} render={({field}) => {
                return (
                    
                    <ReactSelect {...field} defaultValue={product.category} options={categories } error={errors.category?.message} getOptionLabel={cat =>  cat.name}  getOptionValue={cat => cat.id}  placeholder='... Escolha a categoria'/>
                    
                   

                )
            }}>            
            </Controller>
            </div>

                    <ContainerInput>

                   Produto em Oferta ? 
                                          <input type="checkbox"  {...register("offer")}  defaultChecked={product.offer}/>
                </ContainerInput>
            <ButtonStyles >Adicionar Produto</ButtonStyles>
            </form>
    </Container>
    </SuperContainer>
  )
}

export default EditProduct