import React, {useState} from 'react'
import Axios from 'axios';
import './DisplayParksWith.css'

const DisplayParksWith = (props) => {

    const [parksWithAct, setParksWith] = useState([]);

    //Supposed to retrieve the parks that are associated with a given activity
    //DOES NOT WORK AS INTENDED
    const getActPark = () => {
        Axios.get("https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=td1QA88iqfQ8mysJya1p1xFOV8PrkdKD7JzkQ90P").then(
        (response) => {

            setParksWith(response);
            console.log(parksWithAct);
        }
        );
    };

    //<a key={park.id} href="#">{park.fullName}</a>
    return (
        <div className="displayed">
            <h1>{props.activity}</h1>

            <div className="activity-box">
                {/* An example of what the page would look like if I could get the natural parks to display */}
                <a href="#" className="singleActBox">First national park (Example)</a>
                <a href="#" className="singleActBox">Second national park (Example)</a>
                <a href="#" className="singleActBox">Third national park (Example)</a>
                <a href="#" className="singleActBox">Fourth national park (Example)</a>
                <a href="#" className="singleActBox">Fifth national park (Example)</a>
            </div>

        </div>
    )
}

export default DisplayParksWith
