import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import api from '../api/db_trip';
import TripItemList from '../components/TripItemList';
import AppSearch from '../components/AppSearch';
import SearchPage from './SearchPage';

const Home = () => {

  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState('')


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

  const tripElements = trips.filter((trip) =>{
    return (trip.title.toLowerCase().includes(searchText.toLowerCase()) 
    || trip.description.toLowerCase().includes(searchText.toLowerCase())
    ||trip.tags.find((tag) => {return tag.toLowerCase().includes(searchText.toLowerCase())}))
  }).map((trip, index) => {
    return <TripItemList key={index} trip={trip}/>
  })  

  if (searchText === '') {
    return (
      <div className='app-container'>
        <AppSearch trips={trips} onValueChange={setSearchText}/>  
        <div className='app-grid'>
            {tripElements}
        </div>
    </div>
    )
  } else {
    return ( 
      <div className='app-container'>
           
          <AppSearch trips={trips} onValueChange={setSearchText} />
          <div className='app-grid'>
            <SearchPage tripElements={tripElements} />
          </div>
          
        </div>
    )
  }
    
}

export default Home