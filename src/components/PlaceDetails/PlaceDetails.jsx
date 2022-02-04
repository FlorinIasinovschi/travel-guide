import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
padding : 5%;
box-sizing : border-box;
`
export default function PlaceDetails(props) {
  return (
    <Container>
      <h1>{props.name}</h1>
    </Container>
  )
}
