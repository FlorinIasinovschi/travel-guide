import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { Rating } from '@mui/material';




const mapsKey = process.env.REACT_APP_MAPS_KEY;

const PlaceContainer = styled.div`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 100px;
height: 100px;
border-radius: 5px;
overflow : hidden;
box-sizing: border-box;
/* padding: 10px; */
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
cursor: pointer;
`
const Title = styled.h5`
  font-size: .8rem;
  font-weight: 700;
  color: #242424;
`
const ImgContainer = styled.div`
/* background-color: #bbd6f5; */
width: 100%;
height: 60%;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export default function Map({ coordinates, setCoordinates, setBounds, places, setChildClicked }) {


  const zoom = 13;


  return (
    <div style={{ height: 'calc(100vh - 70px )', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsKey }}
        center={coordinates}
        defaultCenter={coordinates}
        defaultZoom={zoom}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, long: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      >
        {places?.map((el, idx) => (
          <PlaceContainer
            lat={el.latitude}
            lng={el.longitude}
            key={idx}
            onClick={(e) => setChildClicked(e)}
          >
            <Title>{el.name}</Title>
            <ImgContainer>
              <Image src={el.photo ? el.photo.images?.large.url : "/images/reastaurant-default.jpeg"} alt={el.name} />

            </ImgContainer>
            <Rating name="read-only" value={Number(el.rating)} readOnly />

          </PlaceContainer>
        ))}

      </GoogleMapReact>
    </div>
  )
}
