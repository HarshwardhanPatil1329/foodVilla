import React from "react";
import fire from "../../Config/Fire";
import { useHistory, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage"

const Home = () => {
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
      

      <button className="SignIn" onClick={logout}>Logout</button> 
      <HomePage/>
    </>
  );
};

export default Home;
