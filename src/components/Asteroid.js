import React from "react";
import styled from "styled-components";

const MarsPhotos = styled.div`
    position: fixed;
    bottom: 0;
    right: 3%;
    color: white;
    background: rgba(75, 75, 75, 0.644);
    max-height: 65px;
    width: 25%;
    transition: max-height 0.6s ease-in-out;
    &:hover {
        max-height: 800px;
    }

`;

const MarsTitle = styled.h2`
    font-size: 1.8rem;
    margin-top: 12px;
    white-space: nowrap;
`;

const MarsRandom = styled.img`
    width: 300px;
    height: 300px;
    margin-bottom: 15px;
`;

 const Asteroid = props => {
// console.log(newMarsPhoto.rover)
// console.log(props.asteroidData[photoSelector])
// console.log(photoSelector)
//  console.log(props.asteroidData)
    return (
        <MarsPhotos>
            <MarsTitle>Daily Mars Photo</MarsTitle>
            <h3>Earth date: {props.earthDate}</h3>
            <h3>Rover: {props.roverName} </h3>
            <h3>Camera: {props.cameraName}</h3>
            <MarsRandom src={props.asteroidData} />
        </MarsPhotos>
    )
}

export default Asteroid;
