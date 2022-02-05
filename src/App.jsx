import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaces } from './api/index';


function App() {

  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => { setCoordinates({ lat: latitude, lng: longitude }) })

  }, [])

  useEffect(() => {
    console.log(coordinates)
    setisLoading(true);
    getPlaces(bounds.sw, bounds.ne).then((data) => { console.log(data); setPlaces(data); setisLoading(false) })

  }, [coordinates, bounds])

  return (
    <>
      <Header />
      <Grid container style={{ width: '100%' }}>
        <Grid item xs={12} md={4} >
          <List places={places} childClicked={childClicked} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} md={8} >
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}

          />
        </Grid>
      </Grid>


    </>
  );
}

export default App;
