

import { useHistory } from "react-router-dom";
import ReactSwitch from "react-switch";

const Header = ({ theme, handleSwitch }) => {
    let history = useHistory();

    const handleClick = () => {

        history.push("/");

    };

    return (
        <header className="header">
            <h1 className={theme === "dark" ? "First-title" : "First-title lightMode"} onClick={handleClick}> mPox tracker </h1>
            <div className="second-section">
                <ReactSwitch onChange={handleSwitch}
                    checked={theme === "dark"}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    handleDiameter={15}
                    offColor="#333"
                    onColor="#0ff"
                    />
                {
                    theme === "dark" ? <div className="img-container">
                        <img src='../images/moon.png' className="darkModeImage" />
                    </div>
                        :
                        <div className="img-container">
                            <img src='../images/sun.png' className="lightModeImage" />
                        </div>
                }


            </div>
        </header>
    )
}


export default Header;