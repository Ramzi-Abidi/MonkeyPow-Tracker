import { useState } from "react";
import Header from "./components/Header"
import Table from "./components/Table";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import { BrowserRouter, Route } from 'react-router-dom';
import CountryScreen from "./components/Countryscreen";
import GlobalComponent from "./components/GlobalComponent";



function App() {
  const [theme, setTheme] = useState("dark");

  const handleSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    else
      setTheme("dark");
  }

  return (
    <BrowserRouter>
      <div className={theme === "light" ? "light" : "dark"}>

        <div className="container">

          <Header theme={theme} handleSwitch={handleSwitch} />
          <div className="App">

            <Route path="/country/:id" component={CountryScreen}>
            </Route>

            <Route path="/" exact>
              <GlobalComponent />
            </Route>
          </div>


        </div>
          <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App