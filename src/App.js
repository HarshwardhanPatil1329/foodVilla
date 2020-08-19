import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserLocationContext } from "./context/user-location";
import { HotelInfo } from "./pages/HoteInfo";
import harshImage from "./harshFood.jpg";
import { SearchResults } from "./pages/SearchResults";
import { Payment } from "./pages/Payment";
import Tabs from "./pages/Payment/Tabs/Tabs";
import {Summary} from "./pages/Summary";


function App() {
  const [userLocation, setUserLocation] = useState({});

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div
            style={{
              backgroundImage: `url(${harshImage})`,
              minHeight: "100vh",
              backgroundSize: "cover",
            }}
          >
            <HomePage />
          </div>
        </Route>
        
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/hotel/:id">
          <HotelInfo />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
