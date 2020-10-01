import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'element-react';

export class Home extends Component {
  
  render() {
    return (
        <div>
          <div className="login-cover">
            <div className="login-cover-image" data-id="login-cover-image" />
            <div className="login-cover-bg" />
          </div>
          <div id="page-container">
            <div
              className="login login-v2"
              data-pageload-addclass="animated fadeIn"
            >
              <div className="login-header">
                <div className="brand">
                  <span className="logo" /> <b>Color</b> Admin
                  <small>responsive bootstrap 4 admin template</small>
                </div>
                <div className="icon">
                  <i className="fa fa-lock" />
                </div>
              </div>
              <div className="login-content">
                <form
                  action="index.html"
                  method="GET"
                  className="margin-bottom-0"
                >
                  <div className="form-group m-b-20">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group m-b-20">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="checkbox checkbox-css m-b-20">
                    <input type="checkbox" id="remember_checkbox" />
                    <label htmlFor="remember_checkbox">Remember Me</label>
                  </div>
                  <div className="login-buttons">
                    <Link
                      type="submit"
                      className="btn btn-success btn-block btn-lg"
                      to= "/main"
                    >
                      Sign me in
                    </Link>
                  </div>
                  <div className="m-t-20">
                    Not a member yet? Click <Link to="/register">here</Link> to
                    register.
                  </div>
                </form>
              </div>
            </div> 
            <a
              href="fake_url"
              className="btn btn-icon btn-circle btn-success btn-scroll-to-top fade"
              data-click="scroll-top"
            >
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </div>
    );
  }
}

export default Home;
