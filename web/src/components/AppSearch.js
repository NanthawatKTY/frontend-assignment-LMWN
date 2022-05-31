import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AppSearch.css';

function AppSearch(props) {

    // let navigate = useNavigate();
    const {value, onValueChange} = props;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            {onValueChange(event.target.value)}   
            // navigate.push('/search');
        }
    }

    return(
        <div className="app-search">
            <input 
                className="app-search-input" 
                type="text" 
                placeholder='Find and go...' 
                value={value}
                onKeyDown={handleKeyDown}   
            />
        </div>
    )
}
export default AppSearch;