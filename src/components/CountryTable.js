import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import BarChar from "./BarChar";

const CountryTable = (props) => {
    const [sorted, setsorted] = useState();
    const [verif, setVerif] = useState(false);


    let countryData = props.countryData;
    let countryName = props.countryName;
    let loading = props.loading;

    let theme = props.theme;


    const handleClickNewInfected = () => {
        if(verif===false) {

            countryData.sort((a, b) => {
                return b.New_infected - a.New_infected;
            });
            setVerif(true);
        }
        else {

            countryData.sort((a, b) => {
                return a.New_infected - b.New_infected;
            });
            setVerif(false);
        }
    }

    const handleClickTotalInfected = () => {
        if(verif===false) {

            countryData.sort((a, b) => {
                return b.Total_infected - a.Total_infected;
            });
            setVerif(true);
        }
        else {

            countryData.sort((a, b) => {
                return a.Total_infected - b.Total_infected;
            });
            setVerif(false);
        }
    }

    const handleClick = () => {

        if (verif == false) {
            countryData.sort((a, b) => {
                console.log(String(a.Date_confirmation));
                const date1 = new Date(String(a.Date_confirmation));
                const date2 = new Date(String(b.Date_confirmation));
                return date2 - date1;
            });

            if (countryData)
                setsorted(countryData);

            setVerif(true);
        }
        else {
            countryData.sort((a, b) => {
                console.log(String(a.Date_confirmation));
                const date1 = new Date(String(a.Date_confirmation));
                const date2 = new Date(String(b.Date_confirmation));
                return date1 - date2;
            });

            if (countryData)
                setsorted(countryData);

            setVerif(false);
        }
    };

    return (

        <div className='table-container'>

            <table className='container'>

                <tr className={theme === "light" && "lightModeTr"}>  <th className='titles'> <h1 className={theme === "light" && "lightModeH1"}> # </h1></th> <th className='titles'> <h1 className={theme === "light" && "lightModeH1"} onClick={handleClick}>date </h1></th>  <th className='titles'> <h1 className={theme === "light" && "lightModeH1"} onClick={handleClickNewInfected}>new infected</h1></th> <th className='titles'> <h1 className={theme === "light" && "lightModeH1"} style={{ cursor: "pointer" }} onClick={handleClickTotalInfected}> total infected</h1> </th> </tr>
                <tbody>
                    {loading && <Circles color="#00BFFF" height={80} width={80} />}

                    {
                        countryData && countryData.map((obj, i) => {
                            return (
                                <tr className={theme === "light" && "lightModeTr"}> <td> {i} </td> <td> {obj.Date_confirmation} </td> <td> {obj.New_infected}</td> <td> {obj.Total_infected} </td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CountryTable;