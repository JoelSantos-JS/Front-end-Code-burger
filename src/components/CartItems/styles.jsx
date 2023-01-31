import styled from "styled-components";


export const Container= styled.div `
    max-width: 750px;
    background: white;
    border-radius: 20px;
    padding: 10px;
    margin: 20px 0 0 40px;

    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 10px;
    border-bottom: 2px solid #b5b5b5;

    p {
        font-size: 18px;
        font-weight: bold;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    
    //width: max-content;
    grid-gap: 10px 15px;
    padding: 10px;

    .quantity{
        display: flex;
        gap: 20px;

        button {
            border: none;
            height: 30px;
            cursor: pointer;
            font-size: 30px;
        }
    }

        img {
            width: 120px;
            border-radius: 10px;
        }

            p {
                font-size: 16px;
                font-weight: 700;
            }
` 


export const EmptyCart = styled.p`
text-align: center;
padding: 20px;
font-weight: bold;
`