import React, {useState} from "react";
import "./TripCategory.css";


const TripCategory = (props) => {
    const tags = []
    const {tripTags} = props

    //State for tag label search
    const [clickTag, setClickTag] = useState('')

    function onTagClick(theTag) {
        setClickTag(theTag)
    }

    for(const tripTag of tripTags) {
        tags.push(<a className="ui label" onTagClicked={onTagClick}>{tripTag}</a>)
    }

    return (
        <div className="trip-item-detail-tag-container">
            <p>Category: {tags}</p>
        </div>
    );
}

export default TripCategory;