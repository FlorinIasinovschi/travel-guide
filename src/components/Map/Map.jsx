import React from 'react';
import GoogleMapReact from 'google-map-react';
const mapsKey = process.env.REACT_APP_MAPS_KEY;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map({ coordinates, setCoordinates, setBounds }) {


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

      </GoogleMapReact>
    </div>
  )
}
