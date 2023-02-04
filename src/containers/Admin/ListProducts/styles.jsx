import styled from "styled-components";
 import {CiEdit} from 'react-icons/ci'



export const Container= styled.div`
    display: flex;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;
    background: #e5e5e5;

    .topmenu {
        font-size: 23px;
        color: black;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .row {
        font-size: 18px;
        font-weight: 600;
    }
`

export const Img = styled.img`
    width: 70px;
    border-radius: 10px;

`

export const CiEditButton = styled(CiEdit)`
        cursor: pointer;
        color: black;
`