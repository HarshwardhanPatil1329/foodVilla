import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelInfoFromId } from "../../services/zomato.service";
import Nav from "../../components/Nav";
import './summary.css';
import swal from 'sweetalert';
import {MainPage} from "../MainPage"

export function Summary() {

  swal("Order Placed!", "Thank You!", "success");
    return(
        <>
        
        <MainPage/>
        
        
        
      
 

        
    </>
    );
}