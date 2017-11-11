import React, { Component } from "react";
import "../styles/login.css";
import "bootstrap-social/bootstrap-social.css"

export default class Login extends Component {
  render() {
    return (
      <div className="container main-login">
        <div className="login-btn-center">
          <a className="btn btn-block btn-social btn-lg btn-instagram" >
            <i className="fa fa-instagram" />
            Sign in with Instagram
          </a>
        </div>
       
      </div>
    );
  }
}
