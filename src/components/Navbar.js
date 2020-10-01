import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div id="header" className="header navbar-default">
      <div className="navbar-header">
        <a href="index.html" className="navbar-brand">
          <span className="navbar-logo" /> <b>Color</b> Admin
        </a>
        <button
          type="button"
          className="navbar-toggle"
          data-click="sidebar-toggled"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <ul className="navbar-nav navbar-right">
        <li className="navbar-form">
          <form name="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keyword"
              />
              <button type="submit" className="btn btn-search">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </li>
        <li className="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="dropdown-toggle f-s-14"
          >
            <i className="fa fa-bell" />
            <span className="label">5</span>
          </a>
          <div className="dropdown-menu media-list dropdown-menu-right">
            <div className="dropdown-header">NOTIFICATIONS (5)</div>
            <a href="# " className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-bug media-object bg-silver-darker" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">
                  Server Error Reports{" "}
                  <i className="fa fa-exclamation-circle text-danger" />
                </h6>
                <div className="text-muted f-s-10">3 minutes ago</div>
              </div>
            </a>
            <a href="# " className="dropdown-item media">
              <div className="media-left">
                <img
                  src="../assets/img/user/user-1.jpg"
                  className="media-object"
                  alt="user-1"
                />
                <i className="fab fa-facebook-messenger text-blue media-object-icon" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">John Smith</h6>
                <p>
                  Quisque pulvinar tellus sit amet sem scelerisque
                  tincidunt.
                </p>
                <div className="text-muted f-s-10">25 minutes ago</div>
              </div>
            </a>
            <a href="# " className="dropdown-item media">
              <div className="media-left">
                <img
                  src="../assets/img/user/user-2.jpg"
                  className="media-object"
                  alt="user-2"
                />
                <i className="fab fa-facebook-messenger text-blue media-object-icon" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">Olivia</h6>
                <p>
                  Quisque pulvinar tellus sit amet sem scelerisque
                  tincidunt.
                </p>
                <div className="text-muted f-s-10">35 minutes ago</div>
              </div>
            </a>
            <a href="# " className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-plus media-object bg-silver-darker" />
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New User Registered</h6>
                <div className="text-muted f-s-10">1 hour ago</div>
              </div>
            </a>
            <a href="# " className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-envelope media-object bg-silver-darker" />
                <i className="fab fa-google text-warning media-object-icon f-s-14" />
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New Email From John</h6>
                <div className="text-muted f-s-10">2 hour ago</div>
              </div>
            </a>
            <div className="dropdown-footer text-center">
              <a href="# ">View more</a>
            </div>
          </div>
        </li>
        <li className="dropdown navbar-user">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="../assets/img/user/user-13.jpg" alt="user-13" />
            <span className="d-none d-md-inline">Adam Schwartz</span>{" "}
            <b className="caret" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="# " className="dropdown-item">
              Edit Profile
            </a>
            <a href="# " className="dropdown-item">
              <span className="badge badge-danger pull-right">2</span> Inbox
            </a>
            <a href="# " className="dropdown-item">
              Calendar
            </a>
            <a href="# " className="dropdown-item">
              Setting
            </a>
            <div className="dropdown-divider" />
            <a href="# " className="dropdown-item">
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </div>
    );
  }
}

export default Navbar;
