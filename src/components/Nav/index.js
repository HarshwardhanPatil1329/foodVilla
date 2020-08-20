import React from "react";
import style from "../Navbar/navbar.module.css";
import { useHistory, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import img from "../../../src/img/124.png" ;

export default function Nav() {
  const history = useHistory();
    function logout(e){
        e.preventDefault();
        if(!Redirect)
        {
          return;
        }
             history.push('/');
       }
  return (
    <> 
      <nav className={style.NavBar}>
      <img className={style.img} src={img}/>
        <Link to="/" className={style.AppName}>FoodVilla</Link>
        <span className={style.FillFlex} />
{/*         
        <a href="" className={style.AppItem1}>
          
            <Link to="/SignUpPage" className={style.b1}>Sign Up</Link>
        </a>
        <a href="" className={style.AppItem2}>
        
        <Link to="/LoginPage" className={style.b2}>Login</Link>
        
        </a> */}
        <button className={style.b2} onClick={logout}>Logout</button>
      </nav>
    </>
  );
}
