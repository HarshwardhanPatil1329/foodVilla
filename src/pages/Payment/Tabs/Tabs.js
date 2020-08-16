import React from "react";
import "../Tabs/Tabs.css";
import HomeDelivery from "../HomeDelivery/HomeDelivery";
import CreditCard from "../CreditCard/CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Tabs extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul className="background">
              <li className="linkList">
                <Link to="/CreditCard/CreditCard" className="link">
                  <span>
                    <FontAwesomeIcon icon="credit-card" />
                  </span>
                  Credit/Debit Card
                </Link>
              </li>
              <li className="linkList">
                <Link className="link">
                  <span>
                    <FontAwesomeIcon icon="rupee-sign" />
                  </span>
                  UPI
                </Link>
              </li>
              <li className="linkList">
                <Link className="link">
                  <span>
                    <FontAwesomeIcon icon="rupee-sign" />
                  </span>
                  Credit
                </Link>
              </li>
              <li className="linkList">
                <Link className="link">
                  <span>
                    <FontAwesomeIcon icon="wallet" />
                  </span>
                  Wallets
                </Link>
              </li>
              <li className="linkList">
                <Link className="link">
                  <span>
                    <FontAwesomeIcon icon="university" />
                  </span>
                  Netbanking
                </Link>
              </li>
              <li className="linkList">
                <Link className="link">
                  <span>
                    <FontAwesomeIcon icon="credit-card" />
                  </span>
                  Food Cards
                </Link>
              </li>
              <li className="linkList">
                <Link to="/HomeDelivery/HomeDelivery" className="link">
                  <span>
                    <FontAwesomeIcon icon="truck" />
                  </span>
                  Pay On Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Route path="/HomeDelivery/HomeDelivery" component={HomeDelivery} />
            <Route path="/CreditCard/CreditCard" component={CreditCard} />
          </div>
        </div>
      </Router>
    );
  }
}
export default Tabs;
