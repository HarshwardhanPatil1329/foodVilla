import React from "react";
import "../Tabs/Tabs.css";
import HomeDelivery from "../HomeDelivery/HomeDelivery";
import CreditCard from "../CreditCard/CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
class Tabs extends React.Component {
  render() {
    return (
      
        <div className="container">
          <div className="sidebar">
            <ul className="background">
              <li className="linkList">
                <Link to="/payment/CreditCard" className="link">
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
                <Link to="/payment/HomeDelivery" className="link">
                  <span>
                    <FontAwesomeIcon icon="truck" />
                  </span>
                  Pay On Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Route path="/payment/CreditCard" component={CreditCard} />
            <Route path="/payment/HomeDelivery" component={HomeDelivery} />
          </div>
        </div>
       
    );
  }
}
export default withRouter(Tabs);
