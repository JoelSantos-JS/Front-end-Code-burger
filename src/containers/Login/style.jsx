import styled from "styled-components";
import BackgroundImage from '../../assets/background.svg'


export const LoginContainer= styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${BackgroundImage}');
    display: flex;
    align-items: center;
    justify-content: center;
    
`

    
export const LoginImage = styled.img `
height: 70%;
`

export const ContainerItems= styled.div `
background: #373737;
box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
border-radius: 0 10px 10px 0;
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 1rem;


h1 {
    margin-top: 50px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #FFFFFF;
}
`

export const Label = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 14px;
margin-top: 10px;
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
margin-bottom: 1.3rem;
font-size: 18px;

&:focus{
    outline: none;
}

`

export const Button = styled.button `
width: 182.81px;
height: 36.13px;
background: #9758A6;
border-radius: 20px;
color: white;
border: none;
cursor: pointer;
font-size: 15px;
margin-bottom: 1.3rem;

&:active {
    opacity: 0.6;
}
`

export const SignInLink = styled.p `
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;

color: #FFFFFF;

a {
    &:hover{
        color: blue;
        transition: 0.4s ease-in-out;
    }
}

`