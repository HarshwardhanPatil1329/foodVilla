import React from "react";
import Nav from "../../components/Nav";
import { SearchForm } from "../../components/SearchForm";
import style from "./mainpage.css";

export function MainPage(){
    return(
        <>
            <Nav/>
            <div className={style.SearchForm}>
             <SearchForm />
            </div>

        </>
    )
}