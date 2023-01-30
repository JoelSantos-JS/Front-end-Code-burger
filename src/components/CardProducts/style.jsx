import styled from "styled-components";


export const Container = styled.div`
    
    background: #FFFFFF;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
width: 400px;
gap: 10px;
display: flex;
align-items: center;

justify-content: center;
margin-top: 1rem;
margin-left: 16px;
margin-bottom: 1.5rem;

`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
   
`

export const Image = styled.img`
    width: 150px;
    border-radius: 8px;
`

export const ProductName = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;

color: #000000;
`
export const ProductPrice = styled.span` 
font-family: 'Roboto';
font-style: bold;
font-weight: 400;
font-size: 18px;
line-height: 19px;
margin-top: 20px;

color: #000000;
`