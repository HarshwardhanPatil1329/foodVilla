import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelInfoFromId } from "../../services/zomato.service";
import NavBar from "../../components/Navbar";
import "./Hotel.css"
import {Data} from "./Demo3"; 
import style from "../../components/SearchForm/SearchForm.module.css";
import {  useLocation, Link } from "react-router-dom";

export function HotelInfo() {
  const { id } = useParams();
  const [docs, setDocs] = useState({});
  useEffect(() => {
    getHotelInfoFromId(id).then(setDocs);
  }, []);
  

  return (
    <>
      <NavBar/>
      {/* {docs.name} <img src={docs.featured_image} alt="" />
      <a href={docs.photos_url}>Click here for photos</a> */}
      <div className="head">
          <img className="img" src={docs.featured_image} alt="" />
          <h4 className="name">{docs.name}</h4>
          <h4 className="cost">Average Cost: {"Average Cost :  ",docs.average_cost_for_two}(per 2)</h4>
          <h4 className="time"> Time: {"Timing :  ",docs.timings}</h4>
          <h4 className="time"> Time: {"Timing :  ",docs.timings}</h4>
          
      </div>

      <div class="sidenav">
          <a href="#">Premium</a>
          <a href="#">Express Delivery</a>
          <a href="#">Only on FoodVilla</a>
          <a href="#">Vegetarian Option</a>
          <a href="#">Pocket Friendly</a>
          <a href="#">Offern Near You</a>
          <a href="#">What's New</a>
          <a href="#">All Restaurants</a>
    </div>
   


    <div className={style.List}>
       
        <div className={style.ListItemWrapper}>
          { 
          Data.map((experience, i) => {
            
            return (
             
                
              
                <div className={style.ListItem}>
                <div key={i} >
                <a href={experience.Name}>
										<img src={experience.Image} alt={experience.companyName}  />
									</a><br />
										<b>	{experience.Name}</b><br/>
											<b>Rs:{experience.Price}</b><br/>
											<b><span>{experience.type}
                      ({experience.Info})
                      </span></b>
                      </div>
                      <Link
                             to={`/payment`}
                            className={style.ListLink}
                      >
                      <button className="b4">Order!!!</button>
                      </Link>
                </div>
               
             
               );
              })
          }
        </div>
      </div>
           
    
    
    </>
 );
}
