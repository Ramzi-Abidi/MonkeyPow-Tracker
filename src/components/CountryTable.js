import React, { useEffect, useState } from 'react'
import BarChar from "./BarChar";

const CountryTable = (props) => {
    const [sorted, setsorted] = useState();
    const [verif, setVerif] = useState(false);

    let countryData = props.countryData;
    let countryName = props.countryName;

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

                <tr>  <th className='titles'> <h1> id </h1></th> <th className='titles'> <h1 onClick={handleClick}>date </h1></th>  <th className='titles'> <h1>new infected</h1></th> <th className='titles'> <h1> total infected</h1> </th> </tr>
                <tbody>
                    {
                        countryData && countryData.map((obj, i) => {
                            return (
                                <tr> <td> {i} </td> <td> {obj.Date_confirmation} </td> <td> {obj.New_infected}</td> <td> {obj.Total_infected} </td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CountryTable;