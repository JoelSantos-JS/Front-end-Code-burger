import styled from "styled-components";
import BackgroundImage from '../../assets/background.svg'


export const RegisterContainer= styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${BackgroundImage}');
    display: flex;
    align-items: center;
    justify-content: center;
    
`

    
export const RegisterImage = styled.img `
height: 80%;
`

export const ContainerItems= styled.div `
background: #373737;
box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
border-radius: 0 10px 10px 0;
height: 80%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 1rem;

img {
    width: 200px;
    margin-left: 105px;
}


h1 {
    margin-top: 50px;
    font-family: 'Roboto';
font-style: bold;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #FFFFFF;
}


form {
    display: flex;
    flex-direction: column;
}
`

export const Label = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 14px;
margin-top: ${props => (props.error ? '12px' : '15px')};
margin-bottom: 5px;
color: #FFFFFF;
outline: none;

`
export const Input = styled.input`
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
width: 391.42px;
height: 38.32px;
padding-left: 10px;
border: ${props => (props.error ? '2px solid red' : null)};

font-size: 18px;

&:focus{
    outline: none;
}

`



export const ErrorMessage = styled.p `
    color: red;
    font-weight: 500;
    font-size: 15px;
`

export const SignInLink = styled.p `
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
cursor: pointer;
color: #FFFFFF;

a {
    &:hover{
        color: blue;
        transition: 0.4s ease-in-out;
    }
}

`