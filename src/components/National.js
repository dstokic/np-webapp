import React, {useState} from 'react'
import Header from './Header';
import './National.css';
import Axios from 'axios';
import DisplayParksWith from './DisplayParksWith';

const National = () => {

    const [activities, setActivites] = useState([]);
    const [activity, setActivity] = useState('');

    //Get all of the different activites
    const getAct = () => {
        Axios.get("https://developer.nps.gov/api/v1/activities?limit=40&api_key=td1QA88iqfQ8mysJya1p1xFOV8PrkdKD7JzkQ90P").then(
            (response) => {

                console.log(response);
                setActivites(response.data.data);

                console.log({activities});

            }
        );
    };

    //Get all of the different parks associated with all the activities
    const [actParks, setActParks] = useState([]);

    const getActPark = () => {
        Axios.get("https://developer.nps.gov/api/v1/activities/parks?limit=50&sort=&api_key=td1QA88iqfQ8mysJya1p1xFOV8PrkdKD7JzkQ90P").then(
        (response) => {
            console.log(response);
            setActParks(response.data.data);
            console.log(actParks);
        }
        );
    };


    /* ----- Code that will be displayed on the page ----- */
    return (
        <div>
            {getActPark}
            <Header message="Explore the National Parks"/>

            <div className="options">

                <p>Choose an activity to display national parks compatible with it</p>
                <div className="dropdown" onMouseEnter={getAct}>

                    <button className="dropbtn">Available Activities</button>
                    <div className="dropdown-content">
                        {activities.map((activity) => (
                            <a key={activity.id} href="#" onClick={() => setActivity(activity.name)}>{activity.name}</a>
                        ))
                        }
                    </div>

                </div>

            </div>

            <DisplayParksWith activity={activity} />
                
        </div>
    )
}

export default National;
