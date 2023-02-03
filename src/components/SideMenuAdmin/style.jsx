import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container =styled.div`
    background: #3c3c3c;
    width:300px;
    top: 0;
    left: 0;
    hr {
        margin: 50px 15px;
    }
`

export const ItemContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    background: ${props => props.isActive ? '#565454;' : 'none'};
    margin: 10px;
`

export const ListLink = styled(Link)`
text-decoration: none;
    color: white;
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`