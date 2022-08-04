import styled from "styled-components"
import { mobile } from '../Responsive';

const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400px;
    ${mobile({width:"390px"})}
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Come let's Grab it.
    </Container>
  )
}

export default Announcement