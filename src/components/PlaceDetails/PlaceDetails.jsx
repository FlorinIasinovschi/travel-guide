import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LocationOn, LocalPhone } from '@mui/icons-material/';
import { Rating, CircularProgress } from '@mui/material';
import { mobile } from '../../responsive';

// const Container = styled.div`
// /* background-color: #bbd6f5; */
// display: flex;
// align-items: center;
// justify-content: space-between;
// flex-direction: column;
// width: 100%;
// box-sizing : border-box;
// padding : 0 5%;
// `

const CardWrapper = styled.div`
/* background-color: #be9e9e; */
display: flex;
/* align-items: center; */
justify-content: space-between;
flex-direction: column;
box-sizing : border-box;
/* padding : 5%; */
width: 100%;
height: auto;
/* border: 1px solid grey; */
border-radius: 5px;
overflow : hidden;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 30px;


`
const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
box-sizing : border-box;
padding : 2% 4%;
width: 100%;
height: auto;
`

const Title = styled.h5`
  font-size: 1.7rem;
  font-weight: 700;
  color: #242424;
${mobile({ fontSize: "1.2rem" })};

`
const ImgContainer = styled.div`
/* background-color: #bbd6f5; */
width: 100%;
height: 350px;
${mobile({ height: "40%" })};

`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Section = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
box-sizing : border-box;

`
const Text = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #444444;
`
const IconImg = styled.img`
  object-fit: cover;
  width: 12px;
  height: 15px;
`

const FoodTagContainer = styled.div`
/* background-color: #bbd6f5; */
display: flex;
align-items: center;
flex-wrap : wrap;
width: 100%;
height: auto;
margin : 10px 0;

`
const FoodTag = styled.h5`
  font-size: .7rem;
  font-weight: 500;
  color: #3a3a3a;
  background: #dfdfdf;
box-sizing : border-box;
padding: 2px 10px;
border-radius: 8px;
margin : 5px 0 0 2px;

`
const Btn = styled.button`
  border: none;
  text-decoration: none;
  box-sizing : border-box;
  padding: 5px 15px;
  border-radius: 5px;
  background : #2070ca;
  color: white;
  cursor: pointer;
  margin : 20px 15px 20px 0;
  :hover {
  background : #539df1;

  }

`

export default function PlaceDetails({ el, selected, refProp }) {



  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  // if (selected) console.log(selected)

  return (
    // <Container>
    // {places?.map((el, idx) => el.name && (
    // <>

    <CardWrapper >
      <ImgContainer>
        <Image src={el.photo ? el.photo.images?.large.url : "/images/reastaurant-default.jpeg"} alt={el.name} />
      </ImgContainer>
      <InfoContainer>
        <Title>{el.name}</Title>
        <Section style={{ padding: "4px 0" }} >
          <Rating name="read-only" value={Number(el.rating)} readOnly precision={0.1} />
          <Text>Out of {Number(el.num_reviews)}  reviews</Text>
        </Section>

        <Section style={{ padding: "4px 0" }} >
          <Text>Price</Text>
          <Text>{el.price_level ? el.price_level : "Unknown"}</Text>
        </Section>
        <Section style={{ padding: "4px 0", marginBottom: "10px" }}>
          <Text>Ranking</Text>
          <Text>{el.ranking ? el.ranking : "Unknown"}</Text>
        </Section>
        {el.awards?.map((award, idx) => idx < 3 && (
          <Section key={idx} >
            <IconImg src={award.images?.small} />
            <Text style={{ fontSize: ".8rem", color: "grey" }}>{award.display_name}</Text>

          </Section>
        ))}
        <FoodTagContainer >
          {el.cuisine?.map((tag) => (
            <FoodTag key={tag.key}>{tag.name}</FoodTag>
          ))}
        </FoodTagContainer>
        <Section style={{ padding: "4px 0" }} >
          <LocationOn style={{ fontSize: "1.3rem", color: "#4b4b4b" }} />
          <Text style={{ fontSize: ".7rem", color: "grey" }}  >{el.address ? el.address : "Unknown"}</Text>
        </Section>
        <Section style={{ padding: "4px 0" }} >
          <LocalPhone style={{ fontSize: "1.3rem", color: "#4b4b4b" }} />
          <Text style={{ fontSize: ".7rem", color: "grey" }}  >{el.phone ? el.phone : "Unknown"}</Text>
        </Section>
        <Section style={{ justifyContent: "flex-start" }} >
          {el.web_url && <Btn onClick={() => window.open(el.web_url, "_blank")}  >Trip Advisor</Btn>}
          {el.website && <Btn onClick={() => window.open(el.website, "_blank")} >Website</Btn>}
        </Section>

        {/* {console.log(el)} */}
      </InfoContainer>
    </CardWrapper>
    // </>
    // ))}
    // </Container>
  )
}
