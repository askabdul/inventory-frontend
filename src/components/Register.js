import React, { Component } from "react";
import { Link } from "react-router-dom";



export class Register extends Component {
  render() {
    return (
      <div>
        <div id="page-container"> 
          <div className="register register-with-news-feed">
            <div className="news-feed">
              <div
                className="news-image"
                style={{
                  backgroundImage:
                    "url(../assets/img/login-bg/login-bg-15.jpg)",
                }}
              />
              <div className="news-caption">
                <h4 className="caption-title">
                  <b>Color</b> Admin App
                </h4>
                <p>
                  As a Color Admin app administrator, you use the Color Admin
                  console to manage your organization’s account, such as add new
                  users, manage security settings, and turn on the services you
                  want your team to access.
                </p>
              </div>
            </div>
            <div className="right-content">
              <h1 className="register-header">
                Sign Up
                <small>
                  Create your Color Admin Account. It’s free and always will be.
                </small>
              </h1>
              <div className="register-content">
                <form
                  action="index.html"
                  method="GET"
                  className="margin-bottom-0"
                >
                  <label className="control-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <div className="row row-space-10">
                    <div className="col-md-6 m-b-15">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="col-md-6 m-b-15">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <label className="control-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="row m-b-15">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>
                  <label className="control-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="row m-b-15">
                    <div className="col-md-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="checkbox checkbox-css m-b-30">
                    <div className="checkbox checkbox-css m-b-30">
                      <input
                        type="checkbox"
                        id="agreement_checkbox"
                        defaultValue
                      />
                      <label htmlFor="agreement_checkbox">
                        By clicking Sign Up, you agree to our{" "}
                        <a href="#">Terms</a> and that you have read
                        our <a href="#">Data Policy</a>, including
                        our <a href="#">Cookie Use</a>.
                      </label>
                    </div>
                  </div>
                  <div className="register-buttons">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block btn-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="m-t-30 m-b-30 p-b-30">
                    Already a member? Click <Link to="/">here</Link> to
                    login.
                  </div>
                </form>
              </div>
            </div>
          </div>
          <a
            href="javascript:;"
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

export default Register;
