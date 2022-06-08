import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BarChar from "./BarChar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faArrowAltCircleDown, faArrowAltCircleUp, faArrowUp, faArrowDown, faArrowDown91, faArrowDownLong, faArrowUpFromBracket, faArrowUpRightFromSquare, faArrowCircleDown, faCartArrowDown, faSortAlphaAsc, faSortAlphaDesc, faSortNumericAsc, faSortNumericDesc, faSortAsc, faSortDesc, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Table = ({ theme }) => {

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState(null);
  const [verif, setVerif] = useState(false);
  const [loading, setLoading] = useState(false);

  const [verifCountry, setVerifCountry] = useState(false);
  const [verifTotalInfected, setVerifTotalInfected] = useState(false);
  const [verifNewInfected, setVerifNewInfected] = useState(false);
  const [verif1, setVerif1] = useState(false);

  const history = useHistory();


  const handleClickOn = (ch) => {
    console.log(ch)
    history.push(`/country/${ch}`);
  }

  const handleClickCountry = () => {



    if (verif === false) {
      data.sort((a, b) => {
        return (a.Country > b.Country) ? -1 : 1;
      });
      /* if (a)
        setSortedData(a); */
      console.log(data);

    }
    else {
      data.sort().reverse() ;

      /*  if (a)
         setSortedData(a); */

    }
    setVerif(!verif);
  }


  const handleClickNewInfected = () => {
    //setVerifTotalInfected(!verifTotalInfected);

    if (verif === false) {
      let a = data.sort((a, b) => {
        return b.New_infected - a.New_infected;
      });
      if (a)
        setSortedData(a);
    }
    else {
      let a = data.sort((a, b) => {
        return a.New_infected - b.New_infected;
      });

      if (a)
        setSortedData(a);

    }
    setVerif(!verif);
  }

  const handleTotalInfected = () => {
    setVerifTotalInfected(!verifTotalInfected);

    if (verif === false) {
      data.sort((a, b) => {
        return b.Total_infected - a.Total_infected;
      });
      /* if (a)
        setSortedData(a); */
    }
    else {
      data.sort((a, b) => {
        return a.Total_infected - b.Total_infected;
      });

      /* if (a)
        setSortedData(a); */

    }
    setVerif(!verif);
    /* console.log(arr) ; */

  }


  useEffect(() => {
    let url1 = "https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/monkeypox_today.json";
    fetch(url1).then((res) => {
      if (res)
        setLoading(true);

      return res.json();
    })
      .then((allData) => {
        setData(allData);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])


  return (
    <div className='table-container'>
      <table className='container'>
        {/*         <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "2rem" }} />
        <FontAwesomeIcon icon={faCaretUp} style={{ fontSize: "2rem" }} />
        <FontAwesomeIcon icon={faCaretUp} style={{ fontSize: "2rem" }} />
 */}
        <tr className={theme === "light" && "lightModeTr"}>  <th className='titles'> <h1 className={theme === "light" && 'lightModeH1'}> # </h1></th> <th className='titles'> <h1 className={theme === "light" && 'lightModeH1'} onClick={handleClickCountry}>country <FontAwesomeIcon icon={faCaretDown} style={!verifCountry && { color: "#bdbdbd" }} /> </h1></th>  <th className='titles'> <h1 className={theme === "light" && 'lightModeH1'} onClick={handleClickNewInfected}>new infected  <FontAwesomeIcon icon={faCaretDown} style={!verifNewInfected && { color: "#bdbdbd" }} /> </h1></th> <th className={theme === "light" && 'lightModeH1'}> <h1 className={theme === "light" && 'lightModeH1'} onClick={handleTotalInfected}> total infected <FontAwesomeIcon icon={verifTotalInfected ? faCaretUp : faCaretDown} style={verifTotalInfected && { color: "#333" }} className="initial" />  </h1> </th> <th className='titles'> <h1 className={theme === "light" && 'lightModeH1'}>chart : </h1></th> </tr>
        <tbody>

          {loading && <Circles color="#00BFFF" height={80} width={80} />}

          {
            data.map((obj, i) => {
              return (
                <tr className={theme === "light" && "lightModeTr"}> <td> {i} </td> <td className='active' onClick={() => handleClickOn(obj.Country)}> {obj.Country} </td> <td> {obj.New_infected}</td> <td> {obj.Total_infected} </td> <td> <BarChar name={obj.Country} /> </td> </tr>
              )
            })
          }

        </tbody>

      </table>

    </div>
  )
}

export default Table