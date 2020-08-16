import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getNameFromZomato } from "../../services/zomato.service";
import style from "../../components/SearchForm/SearchForm.module.css";
import NavBar from "../../components/Navbar";
import  "./search.css";

import ItemsCarousel from 'react-items-carousel';

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
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  

  return (
    <>
      <NavBar />
      <div className="slider">
      <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        slidesToScroll={2}
        infiniteLoop={true}
        // showSlither={true}
        gutter={20}
        belowchevron
        leftChevron={<button className="b1">{'<'}</button>}
        rightChevron={<button className="b1">{'>'}</button>}
        
        chevronWidth={chevronWidth}
        
      >
        <div style={{ height: 150, background: '#EEE' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQSOVXfrGr1Mj0JPRZnUoDxAPG3A_vx-vdhw&usqp=CAU" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://i.dansdeals.com/wp-content/uploads/2020/06/19113747/601719e4-5b92-4c3c-9553-c3aaa34e2be6-700x325.jpg" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKqP3lj-LYIrOQhOmq5qzutam_lVgVG5R5sA&usqp=CAU" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://secureservercdn.net/45.40.155.145/c9f.6a7.myftpupload.com/wp-content/uploads/2020/05/fantuan-referral-code.jpg" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLJfERgMCFsNfFHFgeFRmCN6NjPYtFtZgv3A&usqp=CAU" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqKOulR5shUC4N9t5fni97bllwvhYTmZlhKQ&usqp=CAU" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://i2-prod.mirror.co.uk/incoming/article14217519.ece/ALTERNATES/s615/0_MAIN-MAIN-McDonalds.jpg" className="sliderimg"/></div>
        
        <div style={{ height: 150,width:300, background: '#EEE' }}><img src="https://www.tastecard.co.uk/images/media/84273.jpg" className="sliderimg"/></div>
      </ItemsCarousel>
      </div>
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
