import React, {useState} from "react";
import "./ReadmoreLess.css";

const ReadmoreLess = (props) => {

    const limit = props.limit;
    const text = props.tripDesc
    const trip_url = props.tripURL
    
    // console.log(limit);
    const [isReadMoreShown] = useState(false);

    return(
        // For limit characters
        <div>
            {isReadMoreShown ? text : text.toString().substr(0,limit)}
            <button className="readmore-btn" >
                <a href={trip_url}>...Read more</a>
            </button>
        </div>
    )
}

export default ReadmoreLess;


    //For onClick={toggleBtn}
    // const toggleBtn = () => {
    //     setReadMoreShown(prevState => !prevState);
    // }

    // return(
    //     <div>
    //         {isReadMoreShown ? text : text.toString().substr(0, limit)}
    //         <button className="readmore-btn" href={hrefLink}>
    //             {/* {isReadMoreShown ? '...Read less' : '...Read more'} */}
    //             ...Read more
    //         </button>
    //     </div>
    // )
