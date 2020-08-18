import React from "react";
import "../CreditCard/CreditCard.css";
import {  useLocation, Link } from "react-router-dom";
class CreditCard extends React.Component {
  render() {
    return (
      <div className="CreditCard">
        <h3>WE ACCEPT</h3>
        <div className="card">
          <div>
            <p className="number">4854-xxxxxxxx-2199</p>
            <p>DEBIT CARD | VALID TILL 7/24</p>
            <div>
              <input className="inputs" placeholder="CCV"></input>
              <Link
                             to={`/summary`}
                            // className={style.ListLink}
                      >
              <button className="buttonCard">PAY 216</button></Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <p className="number">4854-xxxxxxxx-2199</p>
            <p>DEBIT CARD | VALID TILL 7/24</p>
            <div>
              <input className="inputs" placeholder="CCV"></input>
              <Link
                             to={`/summary`}
                            // className={style.ListLink}
                      >
              <button className="buttonCard">PAY 216</button></Link>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="number">Add New Card</p>
          <p>Save and pay via card</p>
          <button id="buttonAdd">Add New</button>
        </div>
      </div>
    );
  }
}

export default CreditCard;
