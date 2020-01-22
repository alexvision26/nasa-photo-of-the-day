import React, {useState, useEffect} from "react";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import Apod from "./Apod";
import axios from "axios";

const PageContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=c0twgDxBhmRHKgVFxT5t6aKuRnPZhL4qRkRC55al').then(res => {
        setData(res.data)
        }).catch(error =>{
        console.log('The data was not return', error)
    });
    }, [])

    return (
        <div className="container">
            <Header />
            <div className="page-content">
                <InfoContainer data={data} />
                <Apod data={data}/>
            </div>
        </div>
    )
}
export default PageContainer;