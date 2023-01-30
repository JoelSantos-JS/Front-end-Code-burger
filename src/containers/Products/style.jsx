import styled from "styled-components";



export const Container = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background:    #EFEFEF;
`

export const ProductsImg = styled.img `
width: 100%;


`
export const CategoriesMenu = styled.div `
    display: flex;
  gap: 50px;
   justify-content: center;
   margin-top: 12px;
`
export const CategoryButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: #9a9a9d;
    font-family: 'Roboto';
    color: ${props => props.isActiveCategory ? '#9758A5' : '#9a9a9d'};
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;

`

export const ProductsContainer= styled.div`
width :100%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px;
`