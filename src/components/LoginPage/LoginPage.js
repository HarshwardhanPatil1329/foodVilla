import React, { Component } from "react";
import fire from "../../Config/Fire";
import "../LoginPage/Loginpage.css";
// import {Redirect, Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
// import { Navbar } from "reactstrap";
import Navbar from "../Navbar";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      redirect:false
    };
  }

  handleChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }

  login=(e)=> {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.setState({ redirect: true });
        console.log(u)

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <>
      <Navbar/>
      <div>
        <div className="form">
          <h3>LOGIN</h3>
          <div>
            <h6>Email address</h6>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            <small id="emailHelp" class="form-text text-muted"><br/>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <h6>Password</h6>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
        </div>
      </div>
      </>
    );
  }
}
export default Login;
/*  <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
        </form>*/
