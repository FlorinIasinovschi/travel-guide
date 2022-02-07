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

  const [rating, setRating] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const [autocomplete, setAutocomplete] = useState(null);


  useEffect(() => {
    const filtered = places.filter((el) => Number(el.rating) >= rating)
    setFilteredPlaces(filtered)
  }, [rating])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => { setCoordinates({ lat: latitude, lng: longitude }) })
  }, [])

  const fetchData = () => {
    setisLoading(true)
    getPlaces(bounds.sw, bounds.ne).then((data) => { console.log(data); setPlaces(data); setisLoading(false) })
    setFilteredPlaces([])
  }

  // IN CASE CALLS ARE UNLIMITED
  // useEffect(() => {
  //   console.log(coordinates)
  //   setisLoading(true)
  //   getPlaces(bounds.sw, bounds.ne).then((data) => { console.log(data); setPlaces(data); setisLoading(false) })

  // }, [coordinates, bounds])

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <>
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container style={{ width: '100%' }}>
        <Grid item xs={18} md={4} >
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} fetchData={fetchData} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8} >
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}

          />
        </Grid>
      </Grid>


    </>
  );
}

export default App;
