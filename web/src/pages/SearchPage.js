import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import TripItemList from '../components/TripItemList';
import '../components/TripItemList';

const SearchPage = (props) => {

    const {tripElements} = props;
    let navigate = useNavigate();
    let {seacrhKey} = useParams();
    console.log("SearchPage"+{tripElements});
    return (

        <div>
            SearchPage
            {/* <Routes>
                <Route path='/search' element={<TripItemList />} />
            </Routes> */}
            {tripElements}
        </div>
    
    )
}

export default SearchPage