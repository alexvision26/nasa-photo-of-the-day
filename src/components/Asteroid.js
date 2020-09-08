import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const MarsPhotos = styled.div`
    position: fixed;
    bottom: 0;
    right: 3%;
    color: white;
    padding-bottom: 1%;
    background: rgba(75, 75, 75, 0.644);
    max-height: 65px;
    width: 25%;
    transition: max-height 0.6s ease-in-out;
    &:hover {
        max-height: 800px;
    }
    line-height: 1.4;
    h3 {
        font-size: 1.1rem;
        padding-bottom: 5px;
    }

    @media only screen and (max-width: 950px){
        display:none;
    }

`;

const MarsTitle = styled.h2`
    font-size: 2rem;
    margin-top: 12px;
    margin-bottom: 5%;
`;

const MarsRandom = styled.img`
    width: 75%;
    height: auto;
    margin-bottom: 15px;
`;

const LoaderDiv = styled.div`
    padding: 25% 5%;
`;

 const Asteroid = props => {

    return (
        <MarsPhotos>

        <MarsTitle>Daily Mars Photo</MarsTitle>

         {props.roverName.length == 0 ? <LoaderDiv><Loader
         type="RevolvingDot"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3500}/></LoaderDiv> : <>
         <h3>Earth date: {props.earthDate}</h3>
         <h3>Rover: {props.roverName} </h3>
         <h3>Camera: {props.cameraName}</h3>
         <MarsRandom src={props.asteroidData} /> </> }

        </MarsPhotos>
    )
}

export default Asteroid;