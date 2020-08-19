import React, { useCallback } from "react";
import fire from "../../Config/Fire";
import "../SignUpPage/SignUpPage.css";
import Navbar from "../Navbar";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={handleSignUp}>
        <h3>Sign up</h3>
        <label>
          <h6>Email address</h6>
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <h6> Password</h6>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
