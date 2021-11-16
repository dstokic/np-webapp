import React, {useState} from 'react'
import Header from './Header';
import './Home.css';
import Axios from 'axios';


const Home = () => {

    const [park, setPark] = useState('');
    const [parkURL, setParkURL] = useState('');

    const [park2, setPark2] = useState('');
    const [parkURL2, setParkURL2] = useState('');

    const [park3, setPark3] = useState('');
    const [parkURL3, setParkURL3] = useState('');

    //Gets the park with a given number
    //INTENDED TO BE RANDOM EACH TIME BUT I COULDN'T FIGURE OUT HOW TO DO THAT
    const getPark = () => {
        Axios.get("https://developer.nps.gov/api/v1/parks?api_key=td1QA88iqfQ8mysJya1p1xFOV8PrkdKD7JzkQ90P").then(
            (response) => {

                console.log(response);
                setPark(response.data.data[36].fullName);
                setParkURL(response.data.data[36].url)
                
                setPark2(response.data.data[29].fullName);
                setParkURL2(response.data.data[29].url)

                setPark3(response.data.data[11].fullName);
                setParkURL3(response.data.data[11].url)
            }
        );
      };


    return (
        <div className="home" onMouseEnter={getPark}>
            <Header message="National Parks"/>

            <div className="actualPage">

                <div className="words">
                    <h1>Featured National Parks</h1>
                    <p>Hover over the images to see which parks are featured</p>
                </div>

                <div className="images">
                    <a className="box" href={parkURL} target="_">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg" alt="bear"></img>
                        <h2>{park}</h2>
                    </a>
                    <a className="box" href={parkURL2} target="_">
                        <img src="https://npca.s3.amazonaws.com/images/8792/b01be64d-0577-4643-81b7-a7fe07e6d1a5-banner.jpg?1490038572" alt="pink flowers"></img>
                        <h2>{park2}</h2>
                    </a>
                    <a className="box" href={parkURL3} target="_">
                        <img src="https://i.natgeofe.com/k/e4e20690-5d9e-456c-8288-fe0025cf99d5/bobcat-mountain_3x4.jpg" alt="bobcat"></img>
                        <h2>{park3}</h2>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Home;
