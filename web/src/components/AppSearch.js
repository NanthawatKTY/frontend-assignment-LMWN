import React from 'react'
import './AppSearch.css';
// import { Link, useParams } from 'react-router-dom';
import History from './History';
import { useQueryState } from 'react-router-use-location-state';

function AppSearch(props) {

    const { value, onValueChange, paramKey} = props
    const [param, setParam] = useQueryState('param', '');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            {onValueChange(event.target.value)}   
            setParam(event.target.value)
        }
    }

    return (
        <>
            {/* <button type="button" onClick={() => paramKey('sea')}>
                name: "Felix"
            </button> */}

            <div className="app-search">
                <input 
                    className="app-search-input" 
                    type="text" 
                    placeholder='Find and go...' 
                    value={value}
                    onKeyDown={handleKeyDown}   
                />
            </div>
        </>
    )
}
export default AppSearch;