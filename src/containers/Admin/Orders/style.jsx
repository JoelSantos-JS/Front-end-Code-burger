import styled from "styled-components";

import ReactSelect from "react-select";
export const Container = styled.div`

    min-height: 100vh;
    width: 100vw;
    background: #e5e5e5;
    min-height: 100vh;

    .topmenu {
        font-size: 19px;
        font-weight: bold;
    }
    .row {
        font-size: 18px;
    }
   
`

export const SuperContainer = styled.div`
    display: flex;
    justify-content: flex-start;

`

export const ProductsImg = styled.img`
    width: 60px;
    border-radius: 5px;

`

export const ReactSelectStyle = styled(ReactSelect)`
     width: 250px;
   
        .css-13cymwt-control{
            display: flex;
    align-items: center;
    justify-content: center;
            cursor: pointer;
        }
`

export const Menu = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    margin: 20px 0px;
`

export const LinkMenu = styled.a`
    font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
    border-bottom: ${props => props.isActiveStatus ? '2px solid' : 'none'};
    padding-bottom: 5px ; 
    color: #323050;
    font-size: 25px;
    cursor: pointer;

`