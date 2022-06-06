
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ReactSwitch from "react-switch";

const Header = ({ theme, handleSwitch }) => {
    let history = useHistory();

    
    const handleClick = () => {
        history.push("/");
    };

    return (
        <header className="header">
            <h1 className={theme === "dark" ? "First-title" : "First-title lightMode"} onClick={handleClick}> monkeyPox tracker </h1>
            <div className="second-section">
                <ReactSwitch onChange={handleSwitch} checked={theme === "dark"} />
                <div className="img-container">
                    <img src='../images/moon.png' className="darkModeImage" />
                </div>
                <div className="img-container" >
                    <img src='../images/sun.png' className="lightModeImage" />
                </div>
            </div>
        </header>
    )
}


export default Header;