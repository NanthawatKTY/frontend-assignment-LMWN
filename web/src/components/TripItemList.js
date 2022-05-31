import './TripItemList.css';
import React, {useState} from 'react';
import { useQueryState } from 'react-router-use-location-state';
import ReadmoreLess from './ReadmoreLess';
// import {Link} from 'react-router-dom';

function TripItemList(props) {

    //props received trips object
    const {trip, paramKey} = props
    const [param, setParam] = useQueryState('param', '');

    const tags = []

    // fetch html tag from remaining photos
    const itemPhototag = []
    for(const ImgTag of trip.photos.slice(1)) {
        itemPhototag.push(<img className="ui image" src={ImgTag} />)
    }

    // fetch html tag from remaining category
    for(const tripTag of trip.tags) {
        tags.push(<a className="ui label" onClick={() => paramKey(tripTag)}>{tripTag}</a>)
    }

    const handleClick = (value) => {
        setParam(value)
    }
        
    return (
        <div className="ui items trip_item">
            <div className="item trip-item-content-container" key={trip.eid}>
                <div className="image">
                    <img className="trip-item-main-img" src={trip.photos[0]}/>
                </div>
                <div className="content trip-content">
                    <div className="header trip-item-detail-title-container">
                        <a className="header trip-item-detail-title" href={trip.url}>{trip.title}</a>
                    </div>
                    <div className="description" >
                        <ReadmoreLess limit={100} tripDesc={trip.description} tripURL={trip.url}/>
                    </div>
                    <div className="extra">
                        <div className="trip-item-detail-tag-container">
                            <p>Category: {tags}</p>
                        </div>
                    </div>
                    <div className="ui tiny images">
                        {itemPhototag}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TripItemList; 