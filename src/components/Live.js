import React, {useState} from 'react'
import Header from './Header';
import './Live.css';
import Axios from 'axios';


const Live = () => {

    const [url, setUrl] = useState('');
    const [num, setNum] = useState(5);

    //Gets the url of the park that has been entered
    const getUrl = () => {
        Axios.get("https://developer.nps.gov/api/v1/webcams?limit=192&api_key=td1QA88iqfQ8mysJya1p1xFOV8PrkdKD7JzkQ90P").then(
            (response) => {

                console.log(response);
                setUrl(response.data.data[num].url);
            }
        );
      };

    //Updates the park number to what the user entered in the input box
    const changeHandler = (event) => {
        if(event.target.value > 0 || event.target.value < 191){
            setNum(event.target.value);
        }
    }

    return (
        <div onMouseEnter={getUrl}>
            <Header message="Live Feeds"/>
            <div className="actualPage">

                <div className="feed-search">
                    <p>Enter a park's number in the list (0-191) to view a webpage with its live feed</p>
                    <input type="number" id="parkName" name="parkName" placeholder="Search for a park's live feed..." min='0' max='191' onChange={changeHandler}></input>
                    <input type="submit" id="submit" onClick={getUrl}></input>
                </div>

                <div className="feed">
                    <div className="feed-box">
                    <iframe
                        src={url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Park webcam"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Live;
