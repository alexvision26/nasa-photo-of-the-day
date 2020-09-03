import React, {useState, useEffect} from "react";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import Apod from "./Apod";
import axios from "axios";
import Asteroid from "./Asteroid";

const PageContainer = () => {
    const [data, setData] = useState([]);
    const [marsData, setMarsData] = useState([]);
    const [earthDate, setEarthDate] = useState([]);
    const [cameraName, setCameraName] = useState([]);
    const [roverName, setRoverName] = useState([]);

    // const date = new Date(-8).toISOString().substr(0,10)
    let date = new Date()

    let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=3YfSjeP7gjd7LA8dMkdm4Xd04AVe1yQJXMzTctua&date=${dateString}`).then(res => {
            console.log(res.data)
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
            // console.log(res.data)
            setMarsData(newMarsPhoto)
            setEarthDate(newEarthDate)
            setCameraName(newCameraName)
            setRoverName(newRoverName)
            }).catch(error =>{
            console.log('The data was not return', error)
    });
    }, [])

    return (
        <div className="container">
            <Header />
            <div className="page-content">
                <InfoContainer data={data} />
                <Asteroid asteroidData={marsData} earthDate={earthDate} cameraName={cameraName} roverName={roverName}/>
                <Apod data={data}/>
            </div>
        </div>
    )
}
export default PageContainer;