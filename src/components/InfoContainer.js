import React, { useState } from "react";

const InfoContainer = props => {
    // console.log(props)
    return (
        <>
        <div className='sidebar'>
            <h2>{props.data.title}</h2>
            <p><strong>Description:</strong> {props.data.explanation}</p>
            <a href={props.data.hdurl} target="_blank">Click here to view full resolution.</a>
            <h4>Today's Date: {props.data.date}</h4>
            <h4>Credit: {props.data.copyright}</h4>
        </div>
        {/* <div className='title-btn sidebar--open'>
            <h1>{props.data.title}</h1>
        </div> */}
        </>
    )
}

export default InfoContainer;