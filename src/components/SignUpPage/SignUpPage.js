import React, { useCallback } from "react";
import fire from "../../Config/Fire";
import "./SignUpPage.css";
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
        history.push("/main");
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
        <form id="formSignup" onSubmit={handleSignUp}>
          <p className="mainNameSignup">SIGN UP</p>
          <label>
            <p className="headNameSignup">Email address</p>
            <input
              className="inputSignup"
              name="email"
              type="email"
              placeholder="Email"
            />
            <small id="emailHelp" class="form-text text-muted">
              <br />
              We'll never share your email with anyone else.
            </small>
          </label>
          <label>
            <p className="headNameSignup"> Password</p>
            <input
              className="inputSignup"
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="buttonSignup" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
