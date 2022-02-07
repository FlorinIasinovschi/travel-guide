import React, { createRef, useEffect, useState } from 'react';
import styled from "styled-components";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { CircularProgress } from '@mui/material';
import { mobile } from '../../responsive';


const Container = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
height: calc(100vh - 70px);
${mobile({ height: "120vh" })};


`

const TopWrapper = styled.div`
/* background-color: #f5d7bb; */
display: flex;
justify-content: space-between;
height: auto;
flex-direction: column;
padding : 1% 5%;
box-sizing : border-box;
`

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #292929;
${mobile({ fontSize: "1.5rem" })};

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
 /* background-color: #6183aa; */
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
width: 100%;
margin-top: 3%;
box-sizing : border-box;
overflow : scroll;
${mobile({ width: "90%" })};

`

const Btn = styled.button`
  font-size: 1.5rem;
  border: none;
  text-decoration: none;
  box-sizing : border-box;
  padding: 10px 25px;
  border-radius: 5px;
  background : #2070ca;
  color: white;
  cursor: pointer;
  margin : 20px 15px 20px 0;
  :hover {
  background : #539df1;

  }

`

const WrapperContainer = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 100%;
box-sizing : border-box;
padding : 0 5%;
`

const Warning = styled.h5`
  font-size: .9rem;
  font-weight: 500;
  color: #747474;
`

export default function List({ places, childClicked, isLoading, fetchData, rating, setRating }) {

  // const [type, setType] = useState("restaurants")

  const [elRefs, setElRefs] = useState([])

  // const selected = Number(childClicked)

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <Container>
      <TopWrapper>
        <Heading>{"Click to see restaurants around you."}</Heading>
        <Btn onClick={fetchData} >Fetch Data</Btn>
        <Warning>Due to a limited monthly amount of calls available , the elements displayed per call are reduced. Please be mindful of the number of api calls.</Warning>
        <SelectionContainer>
          {/* <SelectionBox>
            <SelectTitle>Type:</SelectTitle>
            <Selection value={type} onChange={(e) => setType(e.target.value)} >
              <Option value={"restaurants"} >Restaurants</Option>
              <Option value={"hotels"} >Hotels</Option>
              <Option value={"attractions"} >All</Option>
            </Selection>
          </SelectionBox> */}
          <SelectionBox>
            <SelectTitle>Rating:</SelectTitle>
            <Selection value={rating} onChange={(e) => setRating(e.target.value)} >
              <Option value={""} >All</Option>
              <Option value={"3"} >3.00 Stars And Above</Option>
              <Option value={"4"} >4.00 Stars And Above</Option>
              <Option value={"4.5"} >4.50 Stars And Above</Option>
            </Selection>
          </SelectionBox>
        </SelectionContainer>
      </TopWrapper>
      <PlacesContainer>
        {isLoading ?
          <CircularProgress style={{ fontSize: "4rem" }} /> :
          places?.map((el, idx) => el.name && (
            <WrapperContainer ref={elRefs[idx]} key={idx}>
              <PlaceDetails el={el} refProp={elRefs[idx]} selected={Number(childClicked) === idx} />
            </WrapperContainer>
          ))}
      </PlacesContainer>
    </Container>
  )
}
