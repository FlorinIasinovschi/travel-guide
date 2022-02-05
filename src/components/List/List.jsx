import React, { useState } from 'react';
import styled from "styled-components";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { CircularProgress } from '@mui/material';


const Container = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
height: calc(100vh - 70px);

`

const TopWrapper = styled.div`
/* background-color: #f5d7bb; */
display: flex;
justify-content: space-between;
height: auto;
flex-direction: column;
padding : 5%;
box-sizing : border-box;
`

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  color: #292929;
`

const SelectionContainer = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
height: auto;
margin-top: 3%;
width: auto;
`

const SelectionBox = styled.div`
/* background-color: #746456; */
display: flex;
justify-content: space-between;
flex-direction: column;
`
const SelectTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #4b4b4b;
`
const Selection = styled.select`
  font-size: 1.2rem;
  font-weight: 300;
  color: #1f1f1f;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
  padding: 6px 10px;
  :focus {
    outline: none;
}

`
const Option = styled.option`
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  :focus {
    outline: none;
 }
`

const PlacesContainer = styled.div`
 /* background-color: #6183aa;  */
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
width: 100%;
margin-top: 3%;
box-sizing : border-box;
overflow : scroll;
`

export default function List({ places, childClicked, isLoading }) {

  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("all")



  return (
    <Container>
      <TopWrapper>
        <Heading>{"Restaurants, Hotels & Attractions around you"}</Heading>
        <SelectionContainer>
          <SelectionBox>
            <SelectTitle>Type:</SelectTitle>
            <Selection value={type} onChange={(e) => setType(e.target.value)} >
              <Option value={"restaurants"} >Restaurants</Option>
              <Option value={"hotels"} >Hotels</Option>
              <Option value={"attractions"} >All</Option>
            </Selection>
          </SelectionBox>
          <SelectionBox>
            <SelectTitle>Rating:</SelectTitle>
            <Selection value={rating} onChange={(e) => setRating(e.target.value)} >
              <Option value={0} >All</Option>
              <Option value={3} >Above 3.00 Stars</Option>
              <Option value={4} >Above 4.00 Stars</Option>
              <Option value={4.5} >Above 4.50 Stars</Option>
            </Selection>
          </SelectionBox>
        </SelectionContainer>
      </TopWrapper>
      <PlacesContainer>
        {isLoading ?
          <CircularProgress style={{ fontSize: "4rem" }} /> :
          <PlaceDetails places={places} childClicked={childClicked} />
        }
      </PlacesContainer>
    </Container>
  )
}
