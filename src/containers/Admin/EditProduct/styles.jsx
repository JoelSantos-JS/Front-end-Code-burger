import styled from "styled-components";
import Button from '../../../components/Button'
export const SuperContainer = styled.div`
    background: #e3e3e3;
    display: flex;
    justify-content: flex-start;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        gap: 25px;
        background: #565656;
        border-radius: 10px;
        padding: 30px;
    }
`
export const Label = styled.p`
    font-size: 16px;
    color: #ffff;
    margin-bottom: 5px;
`



export const LabelUpload = styled.p`
text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    border: 1px dashed white;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 25px;
    gap: 15px;
    input {
        opacity: 0;
    }
`
export const Input = styled.input`
    height: 40px;
    width: 100%;
    background: #ffff;
    border-radius: 8px;
    border: none;
    margin-bottom: 25px;
    min-width: 300px;
`
export const  ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 20px;
    font-size: 22px;
`

export const ErrorMessage = styled.span `
    color: red;
    font-weight: 500;
    font-size: 15px;
`

export const ContainerInput = styled.div `
display: flex;
align-items: baseline;
gap: 10px;
input {
    cursor: pointer;
    height: 20px;
    width: 20px;
}

`