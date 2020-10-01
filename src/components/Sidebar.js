import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class Sidebar extends Component {
  render() {
    return (
      <div>
        <div id="sidebar" className="sidebar">
          <div data-scrollbar="true" data-height="100%">
            <ul className="nav">
              <li className="nav-profile">
                <a href="# " data-toggle="nav-profile">
                  <div className="cover with-shadow" />
                  <div className="image">
                    <img src="../assets/img/user/user-13.jpg" alt="user-13" />
                  </div>
                  <div className="info">
                    <b className="caret pull-right" />
                    Sean Ngu
                    <small>Front end developer</small>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-header">Navigation</li>
              <li className="has-sub ">
                <Link to="/main/dashboard">
                  <i className="fa fa-th-large " />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="has-sub">
                <a href="/main/products">
                  <i className="fa fa-gem" />
                  <span>
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a href="bootstrap_4.html">
                  <div className="icon-img">
                    <img src="../assets/img/logo/logo-bs4.png" alt="logo-bs4" />
                  </div>
                  <span>
                    Purchase
                  </span>
                </a>
              </li>
              <li className="has-sub">
                <a href="# ">
                  <i className="fa fa-list-ol" />
                  <span>
                    Sales
                  </span>
                </a>
              </li>
              <li className="has-sub">
                <a href="# ">
                  <i className="fa fa-table" />
                  <span>Report</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="# ">
                  <i className="fa fa-star" />
                  <span>Settings</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="# ">
                  <i className="fa fa-envelope" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
