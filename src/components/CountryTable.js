import React, { useEffect, useState } from 'react'
import BarChar from "./BarChar";

const CountryTable = (props) => {
    console.log(props);

    let countryData = props.countryData;
    let countryName = props.countryName;
    console.log(countryData) ;

    return (

        <div className='table-container'>
            <table className='container'>

                <tr>  <th className='titles'> <h1> id </h1></th> <th className='titles'> <h1>date </h1></th>  <th className='titles'> <h1>new infected</h1></th> <th className='titles'> <h1> total infected</h1> </th> </tr>
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