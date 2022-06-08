import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BarChar from "./BarChar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Table = ({ theme }) => {

  const [data, setData] = useState([]);
  const [verifC, setVerifC] = useState(false);
  const [verifNI, setVerifNI] = useState(false);
  const [verifTI, setVerifTI] = useState(false);
  const [loading, setLoading] = useState(false);

  const [verifCountry, setVerifCountry] = useState(false);
  const [verifTotalInfected, setVerifTotalInfected] = useState(false);
  const [verifNewInfected, setVerifNewInfected] = useState(false);
  const [triangleColorCLight,setTriangleColorCLight] = useState("#bdbdbd") ;  
  const [triangleColorCDark,setTriangleColorCDark] = useState("#4a5369") ;  
  const [triangleC,setTriangleC] = useState(faCaretDown);
  const [triangleColorNILight,setTriangleColorNILight] = useState("#bdbdbd");
  const [triangleColorNIDark,setTriangleColorNIDark] = useState("#4a5369");
  const [triangleNI,setTriangleNI] = useState(faCaretDown);
  const [triangleColorTILight,setTriangleColorTILight] = useState("#bdbdbd");
  const [triangleColorTIDark,setTriangleColorTIDark] = useState("#4a5369");
  const [triangleTI,setTriangleTI] = useState(faCaretDown);

  const history = useHistory();

/* '''''''''''''''''''''''''''''''''''''''''''''''

  couleurs triangle mode nuit => #4a5369 et white  

'''''''''''''''''''''''''''''''''''''''''''''''''' */


  const handleClickOn = (ch) => {
    console.log(ch);
    history.push(`/country/${ch}`);
  }

  const handleClickCountry = () => {
    setVerifNI(false)
    setVerifNewInfected(false)
    setTriangleNI(faCaretDown)
    setTriangleColorNILight("#bdbdbd")
    setTriangleColorNIDark("#4a5369")
    setVerifTI(false)
    setVerifTotalInfected(false)
    setTriangleTI(faCaretDown)
    setTriangleColorTILight("#bdbdbd")
    setTriangleColorTIDark("#4a5369")

    if (!verifC) {
      if (!verifCountry) {
        setVerifCountry(!verifCountry);
        setVerifC(true);
        setTriangleColorCLight("black");
        setTriangleColorCDark("white");
        console.log("a")
        data.sort((a, b) => {
          return (a.Country > b.Country) ? -1 : 1;
        });
      }
    }
    else {
      if (verifCountry) {
        console.log("b")
        setVerifCountry(!verifCountry);
        setTriangleC(faCaretUp);
        data.sort((a, b) => {
          return (a.Country > b.Country) ? 1 : -1;
        });
      }
      else {
        console.log("c")
        setVerifCountry(!verifCountry);
        setTriangleC(faCaretDown);
        data.sort((a, b) => {
          return (a.Country > b.Country) ? -1 : 1;
        });
      }
    }  
  }

  const handleClickNewInfected = () => {
    setVerifC(false);
    setVerifCountry(false)
    setTriangleC(faCaretDown);
    setTriangleColorCLight("#bdbdbd");
    setTriangleColorCDark("#4a5369");
    setVerifTI(false);
    setVerifTotalInfected(false)
    setTriangleTI(faCaretDown);
    setTriangleColorTILight("#bdbdbd");
    setTriangleColorTIDark("#4a5369");

    if (!verifNI) {
      if (!verifNewInfected) {
        setVerifNewInfected(!verifNewInfected);
        setVerifNI(true);
        setTriangleColorNILight("black");
        setTriangleColorNIDark("white");
        console.log("a");
        data.sort((a, b) => {
          return (a.New_infected > b.New_infected) ? -1 : 1;
        });
      }
    }
    else {
      if (verifNewInfected) {
        console.log("b");
        setVerifNewInfected(!verifNewInfected);
        setTriangleNI(faCaretUp);
        data.sort((a, b) => {
          return (a.New_infected > b.New_infected) ? 1 : -1;
        });
      }
      else {
        console.log("c");
        setVerifNewInfected(!verifNewInfected);
        setTriangleNI(faCaretDown);
        data.sort((a, b) => {
          return (a.New_infected > b.New_infected) ? -1 : 1;
        });
      }
    }  
  }

  const handleTotalInfected = () => {
    setVerifC(false);
    setVerifCountry(false)
    setTriangleC(faCaretDown);
    setTriangleColorCLight("#bdbdbd");
    setTriangleColorCDark("#4a5369");
    setVerifNI(false);
    setVerifNewInfected(false);
    setTriangleNI(faCaretDown);
    setTriangleColorNILight("#bdbdbd");
    setTriangleColorNIDark("#4a5369");

    if (!verifTI) {
      if (!verifTotalInfected) {
        setVerifTotalInfected(!verifTotalInfected);
        setVerifTI(true);
        setTriangleColorTILight("black");
        setTriangleColorTIDark("white");
        console.log("a");
        data.sort((a, b) => {
          return (a.Total_infected > b.Total_infected) ? -1 : 1;
        });
      }
    }
    else {
      if (verifTotalInfected) {
        console.log("b");
        setVerifTotalInfected(!verifTotalInfected);
        setTriangleTI(faCaretUp);
        data.sort((a, b) => {
          return (a.Total_infected > b.Total_infected) ? 1 : -1;
        });
      }
      else {
        console.log("c");
        setVerifTotalInfected(!verifTotalInfected);
        setTriangleTI(faCaretDown);
        data.sort((a, b) => {
          return (a.Total_infected > b.Total_infected) ? -1 : 1;
        });
      }
    }  
  }

  useEffect(() => {
    let url1 = "https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/monkeypox_today.json";
    fetch(url1).then((res) => {
      if (res)
        setLoading(true);

      return res.json();
    }
    ).then((allData) => {
        setData(allData);
        setLoading(false);
      }
      ).catch((err) => {
        console.log(err);
        })
  }, [])
  
  return (
    <div className='table-container'>
      <table className='container'>
      <thead>
        <tr className={theme === "light" && "lightModeTr"}>  
          <th className='titles'> 
            <h1 className={theme === "light" && 'lightModeH1'}> # </h1>
          </th> 
          <th className='titles'> 
            <h1 className={theme === "light" && 'lightModeH1'} onClick={handleClickCountry}>country <FontAwesomeIcon icon={triangleC} style={ theme ==="light" ? { color: triangleColorCLight } : { color: triangleColorCDark } } /> </h1>
          </th>  
          <th className='titles'> 
            <h1 className={theme === "light" && 'lightModeH1'} onClick={handleClickNewInfected}>new infected  <FontAwesomeIcon icon={triangleNI} style={ theme ==="light" ? { color: triangleColorNILight } : { color: triangleColorNIDark } } /> </h1>
          </th> 
          <th className={theme === "light" && 'lightModeH1'}> 
            <h1 className={theme === "light" && 'lightModeH1'} onClick={handleTotalInfected}> total infected <FontAwesomeIcon icon={triangleTI} style={ theme ==="light" ? { color: triangleColorTILight } : { color: triangleColorTIDark } } className="initial" />  </h1> 
          </th> 
          <th className='titles'> 
          <h1 className={theme === "light" && 'lightModeH1'}>chart : </h1>
          </th> 
        </tr>
      </thead>
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