import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BarChar from "./BarChar";

const Table = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState(null);
  const history = useHistory();

  const handleClickOn = (ch) => {
    console.log(ch)
    history.push(`/country/${ch}`);
  }

  const handleTotalInfected = () => {
    let a = data.sort((a, b) => {
      return b.Total_infected - a.Total_infected;   //asc
    });

    console.log(a);

    if (a)
      setSortedData(a);

    JSON.stringify(localStorage.setItem("sortedItems", a));

    console.log(sortedData);

    /*  *//*  window.location.reload(false); */
  }


  useEffect(() => {
    let url1 = "https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/monkeypox_today.json";
    fetch(url1).then((res) => {
      return res.json();
    })
      .then((allData) => {
        setData(allData);
        console.log(data);

      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return (
    <div className='table-container'>
      <table className='container'>

        <tr>  <th className='titles'> <h1> id </h1></th> <th className='titles'> <h1>country </h1></th>  <th className='titles'> <h1>new infected</h1></th> <th className='titles'> <h1 onClick={handleTotalInfected}> total infected</h1> </th> <th className='titles'> <h1>chart : </h1></th> </tr>
        <tbody>

          {
            sortedData ? (
              sortedData.map((obj, i) => {
                return (
                  <tr> <td> {i} </td> <td className='active' onClick={(e) => handleClickOn(e.target.value) }> {obj.Country} </td> <td> {obj.New_infected}</td> <td> {obj.Total_infected} </td> <td> <BarChar name={obj.Country} /> </td> </tr>
                )
              })
            )

              : data.map((obj, i) => {
                return (
                  <tr> <td> {i} </td> <td className='active' onClick={() => handleClickOn(obj.Country)}> {obj.Country} </td> <td> {obj.New_infected}</td> <td> {obj.Total_infected} </td> <td> <BarChar name={obj.Country} /> </td> </tr>
                )
              })
          }

        </tbody>

      </table>

    </div>
  )
}

export default Table