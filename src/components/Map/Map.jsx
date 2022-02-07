import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import { mobile } from '../../responsive';




const mapsKey = process.env.REACT_APP_MAPS_KEY;

const MapDiv = styled.div`
  height: calc(100vh - 70px );
  width: 100%;
  box-sizing: border-box;
  ${mobile({ padding: "10%" })};
  
`

const PlaceContainer = styled.div`
position: absolute;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 100px;
height: auto;
border-radius: 5px;
overflow : hidden;
box-sizing: border-box;
/* padding: 10px; */
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
cursor: pointer;
z-index: 1;

&:hover {
  z-index: 20;
}

`

const TileContainer = styled.div`
/* background-color: #bbd6f5; */
height : auto;
width : 100%;
display: flex;

box-sizing: border-box;
padding: 5%;

`
const Title = styled.h5`
  font-size: 100%;
  font-weight: 700;
  color: #242424;
`
const ImgContainer = styled.div`
/* background-color: #bbd6f5; */
flex:1;
width: 90%;
height: 50px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const RatingContainer = styled.div`
/* background-color: #bbd6f5; */
box-sizing: border-box;
padding : 5%;
`



export default function Map({ coordinates, setCoordinates, setBounds, places, setChildClicked }) {


  const zoom = 13;
  const londonCoord = { latitude: 51.50, longitude: 0.12 }

  return (
    <MapDiv >
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsKey }}
        center={coordinates}
        defaultCenter={londonCoord}
        defaultZoom={zoom}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, long: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      // onChildClick={(e) => setChildClicked(e)}
      // onChildClick={(e) => console.log(e)}

      >
        {places?.map((el, idx) => el.name && (
          <PlaceContainer
            lat={el.latitude}
            lng={el.longitude}
            key={idx}
            onClick={() => setChildClicked(idx)}

          >
            <TileContainer>
              <Title>{el.name}</Title>

            </TileContainer>
            <ImgContainer>
              <Image src={el.photo ? el.photo.images?.large.url : "/images/reastaurant-default.jpeg"} alt={el.name} />

            </ImgContainer>
            <RatingContainer>
              <Rating name="read-only" value={Number(el.rating)} readOnly size='small' precision={0.1} />

            </RatingContainer>

          </PlaceContainer>
        ))}

      </GoogleMapReact>
    </MapDiv>
  )
}
