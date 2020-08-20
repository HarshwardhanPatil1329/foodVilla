import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserLocationContext } from "./context/user-location";
import { HotelInfo } from "./pages/HoteInfo";
import harshImage from "./harshFood.jpg";
import log from "./new12.jpg"
import { SearchResults } from "./pages/SearchResults";
import { Payment } from "./pages/Payment";
import Tabs from "./pages/Payment/Tabs/Tabs";
import {Summary} from "./pages/Summary";
import Login from "./components/LoginPage/LoginPage";
import SignUp  from "./components/SignUpPage/SignUpPage";
import {MainPage} from "./pages/MainPage";


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
        <Route path="/LoginPage"  component={Login}>
          <div
          style={{
              backgroundImage: `url(${log})`,
              minHeight: "100vh",
              backgroundSize: "cover",
            }}
            >

          <Login />
            </div>
       </Route>
        <Route path="/main">
         <div
            style={{
              backgroundImage: `url(${harshImage})`,
              minHeight: "100vh",
              backgroundSize: "cover",
            }}
          >
            <MainPage/>
        </div>
       </Route> 
        <Route path="/SignUpPage" component={SignUp}>
        <div
          style={{
              backgroundImage: `url(${log})`,
              minHeight: "100vh",
              backgroundSize: "cover",
            }}
            >
        <SignUp />
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
