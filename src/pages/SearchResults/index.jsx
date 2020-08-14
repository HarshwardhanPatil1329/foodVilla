import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getNameFromZomato } from "../../services/zomato.service";
import style from "../../components/SearchForm/SearchForm.module.css";
import NavBar from "../../components/Navbar";
import  "./search.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/sw1.jpeg";
import img2 from "./images/sw2.jpeg";
import AwesomeSlider from 'react-awesome-slider';

export function SearchResults() {
  const params = useLocation();
  const [results, setResult] = useState([]);


  const query = useMemo(() => {
    return new URLSearchParams(params.search).get("q");
  }, [params.search]);

  useEffect(() => {
    getNameFromZomato(query).then((docs) => {
      setResult(docs.restaurants);
    });
  }, [query]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   variableWidth: true
    

  // }
  

  return (
    <>
      <NavBar />
      <div>
      
          {/* <AwesomeSlider>
          <div>
            <h3><img className="img" src={img1}/></h3>
          </div>
          <div>
            <h3><img className="img" src={img2}/></h3>
          </div>
          <div>
            <h3><img className="img" src={img1}/></h3>
          </div>
          <div>
            <h3><img className="img" src={img2}/></h3>
          </div>
          <div>
            <h3><img className="img" src={img1}/></h3>
          </div>
          <div>
            <h3><img className="img" src={img2}/></h3>
          </div>
          </AwesomeSlider> */}
        
      </div>

      <div class={style.sidenav}>
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
       
      
        <h1 style={{marginRight: + '5px'}}>Top Picks</h1>
        <div className={style.ListItemWrapper}>
          {results.map((result) => {
            const restaurant = result.restaurant;
            return (
              <Link
                to={`/hotel/${restaurant.id}`}
                className={style.ListLink}
                key={result.restaurant.id}
              >
                <div className={style.ListItem}>
                  {restaurant.featured_image && (
                    <img src={restaurant.featured_image} alt="" />
                  )}
                  <br />
                  <b>{restaurant.name}</b>
                  <br />
                  <span>Ratings: {restaurant.user_rating.rating_text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
