import React from "react";
import "../HomeDelivery/HomeDelivery.css";
import {  useLocation, Link } from "react-router-dom";
class HomeDelivery extends React.Component {
  render() {
    return (
      <div className="HomeDelivery">
        <div className="card">
          <h3>Home Delivery</h3>
          <Link
                             to={`/summary`}
                            // className={style.ListLink}
                      >
          <button id="button">PAY 216</button></Link>
        </div>
      </div>
    );
  }
}

export default HomeDelivery;
