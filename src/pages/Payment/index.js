import React, { useEffect, useState } from "react";

import NavBar from "../../components/Navbar/index";
import "./FontAwesomeIcons/FontAwesome";
import "./Tabs/Tabs";
import Tabs from "./Tabs/Tabs";




export function Payment() {
    

    return(
        <>
         <NavBar/> 
        <div>
            <Tabs/>
        </div>
        </>
    );

}