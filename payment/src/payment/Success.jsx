import React from "react";
import styled from "styled-components"

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 200px;
`;

const Img=styled.img`
width: 100px;
`;


const Desc=styled.p`
margin: 10px;
`;




const Button=styled.button`
background-color: #56921e;
color: white;
width: 120px;
height: 40px;
font-weight: 600;
font-size: 20px;
border-radius: 5px;
border: none;
`;



const success = () => {
  return (
    <Container>
        <Img src="https://www.pngmart.com/files/10/Thumbs-UP-PNG-Image.png"></Img>
        <Button>Successful.</Button>
        <Desc>Your order is being prepared.Thanks for<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;choosing Yola shop.</Desc>
    </Container>
  )
}

export default success

