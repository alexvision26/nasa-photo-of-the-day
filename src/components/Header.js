import React from "react";

const Header = props => {
    return (
        <div className="topbar">
            <div className="logo-container">
                <img className="logo" width="95px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png' alt="placeholder"></img>
            </div>
            <h1>Astronomy Picture of The Day</h1>
        </div>
    )
}
export default Header;