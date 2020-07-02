import React from "react";

const Apod = props => {
    return (
        <div className="apod-container">
        <img className="apod-img" src={props.data.url} alt={props.data.title}></img>
        </div>
    )
}

export default Apod;