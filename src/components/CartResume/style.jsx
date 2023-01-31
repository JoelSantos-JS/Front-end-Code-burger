import styled from "styled-components";

export const Container= styled.div `
    background: white;
    padding: 10px;
    border-radius: 20px;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

   
`

export const ContainerItems = styled.div`
    display: grid;
    grid-gap: 10px 50px;
    margin-bottom: 50px;
    grid-template-areas: 'title title'
        'items itemsPrice'
        'taxe taxePrice'
    ;
    font-weight: bold;
    font-size: 18px;
   

    .title {
        grid-area: title;
        margin-bottom: 30px;
    }
    .items {
        grid-area: items;
    }
    .itemsPrice {
        grid-area: itemsPrice;
    }
    .taxe {
        grid-area: taxe;
    }
    .taxePrice {
        grid-area: taxePrice;
    }

`
export const ContainerTotal = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bold;
`