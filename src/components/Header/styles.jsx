import styled from "styled-components";



export const Container= styled.div`
height: 72px;
background: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export  const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    font-size: 19px;
    transition: 0.2s ease-in-out;

    &:hover{
        color:  #9758A6;

    }
`
export const Line =styled.div`
    height: 40px;
    border-right: 1px solid;
    color:  #9758A6;
    &:hover{
        color:  #9758A6;

    }
`

export const ContainerText = styled.div`
    p {
        font-size: 18px;
        font-weight: 600;
        color:  #9758A6;
    }
`

export const PageLinkExit = styled.a`
cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    font-size: 19px;
    transition: 0.2s ease-in-out;

    &:hover{
        color:  #9758A6;

    }

`