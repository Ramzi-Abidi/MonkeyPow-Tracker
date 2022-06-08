import { useEffect, useState } from "react";
import Header from "./components/Header"
import Table from "./components/Table";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import { BrowserRouter, Route } from 'react-router-dom';
import CountryScreen from "./components/Countryscreen";
import GlobalComponent from "./components/GlobalComponent";

function App() {
  const [theme, setTheme] = useState("light");
  

  const handleSwitch = () => {
    if (theme === "dark") {
      setTheme("light");

    }
    else {
      
      //document.querySelector(".img-container2").style.display = "none" ;
      setTheme("dark");
    }

  }


   useEffect(() => {
    localStorage.setItem("mode", theme);

  }, [theme]) ; 

  return (
    <BrowserRouter>
      <div className={theme === "light" ? "light" : "dark"}>
        <div className="container">

          <Header theme={theme} handleSwitch={handleSwitch} />
          <div className="App">

            {/* <Route path="/country/:id" component={CountryScreen} theme={theme} >
            </Route> */}

            <Route path="/" exact>
              <GlobalComponent theme={theme} />
            </Route>

            <Route path="/country/:id">
              <CountryScreen theme={theme} />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App