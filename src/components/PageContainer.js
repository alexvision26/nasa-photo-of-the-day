import React, {useState, useEffect} from "react";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import Apod from "./Apod";
import axios from "axios";
import Asteroid from "./Asteroid";

import './DatePicker.scss';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

const PageContainer = () => {
    const [data, setData] = useState([]);
    const [marsData, setMarsData] = useState([]);
    const [earthDate, setEarthDate] = useState([]);
    const [cameraName, setCameraName] = useState([]);
    const [roverName, setRoverName] = useState([]);

    const ApodAPI = process.env.REACT_APP_APOD_KEY

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${ApodAPI}`).then(res => {
        setData(res.data)
        }).catch(error =>{
        console.log('The data was not return', error)
    });
    }, [])

    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c0twgDxBhmRHKgVFxT5t6aKuRnPZhL4qRkRC55al').then(res => {
            let photoSelector = Math.floor((Math.random() * 856) + 1); //generates random numbers to select random Mars rover photos from archive
            let newMarsPhoto = res.data.photos[photoSelector].img_src;
            let newEarthDate = res.data.photos[photoSelector].earth_date;
            let newCameraName = res.data.photos[photoSelector].camera.name;
            let newRoverName = res.data.photos[photoSelector].rover.name;

            setMarsData(newMarsPhoto)
            setEarthDate(newEarthDate)
            setCameraName(newCameraName)
            setRoverName(newRoverName)
            }).catch(error =>{
            console.log('The data was not return', error)
    });
    }, [])

    const handleDate = newDate => {
        setDate(newDate)
      };

    return (
        <div className="container">
            <Header />

            <DatePicker
                selected={date}
                onChange={handleDate}
            />

            <div className="page-content">
                <InfoContainer data={data} />
                <Asteroid asteroidData={marsData} earthDate={earthDate} cameraName={cameraName} roverName={roverName}/>
                <Apod data={data}/>
            </div>
        </div>
    )
}
export default PageContainer;