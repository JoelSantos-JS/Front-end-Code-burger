import styled from "styled-components";



export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #EFEFEF;
    padding: 35px 0 35px 0;

    .rec.rec-arrow {
        background: #9758A6;
        color: white;
        font-size: 38px;
        transition: 0.4s ease-in-out;
    
}

.rec.rec-arrow:hover {
    border: 2px solid whitesmoke;
    opacity: 0.8;
}



`

export const CategoryImage = styled.img`

margin-top: 2rem;
    margin-bottom: 2rem;
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Image = styled.img`
    width: 200px;
    border-radius: 6px;
`

export const Button = styled.button`
    border: none;
     height: 55px;
background: #9758A6;
box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
border-radius: 15px;
color: #FFFFFF;

font-size: 18px;
cursor: pointer;
transition: 0.4s ease-in-out;

&:hover {
    opacity: 0.6;
}
;
`

