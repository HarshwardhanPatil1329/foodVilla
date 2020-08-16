import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelInfoFromId } from "../../services/zomato.service";
import NavBar from "../../components/Navbar/index";




export function Payment() {
    const { id } = useParams();
    const [docs, setDocs] = useState({});
    useEffect(() => {
      getHotelInfoFromId(id).then(setDocs);
    }, []);

    return(
        <NavBar/>
    );

}