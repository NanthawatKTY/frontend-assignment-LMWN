import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useQueryState } from 'react-router-use-location-state';
import api from '../api/db_trip';
import '../components/AppSearch.css';
import TripItemList from '../components/TripItemList';
import History from '../components/History';
import AppSearch from '../components/AppSearch';

const Home = () => {

  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [paramKey, setParamKey] = useQueryState('param', '');


  //Retreive data from API
  const retreiveTrips = async () => {
    const response = await api.get("/trips")
    return response.data
  }

  useEffect(() => {
    const getAllTrips = async () => {
      const allTrips = await retreiveTrips()
      if (allTrips) setTrips(allTrips)
    }
    getAllTrips()
  }, []);



  //Param key
  const handleClick = (value) => {
    setParamKey(value)
  }

  const tripElements = trips.filter((trip) =>{
    return (trip.title.toLowerCase().includes(paramKey.toLowerCase()) 
    ||trip.description.toLowerCase().includes(paramKey.toLowerCase())
    ||trip.tags.find((tag) => {return tag.toLowerCase().includes(paramKey.toLowerCase())}))
  }).map((trip, index) => {
    return <TripItemList key={index} trip={trip} paramKey={handleClick}/>
  })  

  //Check if searchText is empty
  // paramKey != '' ? console.log("do something") : console.log("ไม่มีจ้า")

  return (
      <div className='app-container'>
        <AppSearch trips={trips} onValueChange={setSearchText} paramKey={handleClick}  />
        <div className='app-grid'>
            {tripElements}
        </div>
      </div>
    )
}

export default Home