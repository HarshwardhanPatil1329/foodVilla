import React from "react";
import style from "./navbar.module.css";
import {Link} from "react-router-dom";
import img from "../../../src/img/124.png" ;

export default function Index() {
  return (
    <> 
      <nav className={style.NavBar}>
      <img className={style.img} src={img}/>
        <Link to="/" className={style.AppName}>FoodVilla</Link>
        <span className={style.FillFlex} />
        {/* <a href="" className={style.AppItem}>
          Login
        </a>
        <a href="" className={style.AppItem}>
          Sign up
        </a> */}
        <a href="" className={style.AppItem1}>
          {/*  */}
            <Link to="/SignUpPage" className={style.b1}>Sign Up</Link>
        </a>
        <a href="" className={style.AppItem2}>
        {/* Sign Up */}
        <Link to="/LoginPage" className={style.b2}>Login</Link>
        </a>
      </nav>
    </>
  );
}
