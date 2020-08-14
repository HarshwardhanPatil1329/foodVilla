import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserLocationContext } from "./context/user-location";
import { HotelInfo } from "./pages/HoteInfo";
import harshImage from "./harshFood.jpg";
import { SearchResults } from "./pages/SearchResults";

function App() {
  const [userLocation, setUserLocation] = useState({});
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (success) => {
  //       setUserLocation(success.coords);
  //     },
  //     (error) => {
  //       alert("Allow location to continue");
  //     }
  //   );
  // }, []);

  // if (!userLocation) {
  //   return <>Getting user location...</>;
  // }

  return (
    // <UserLocationContext.Provider value={userLocation}>
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
        </Switch>
      </Router>
    // </UserLocationContext.Provider>
  );
}

export default App;
