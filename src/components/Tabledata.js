import React, { Component } from "react";
import { BrowserRouter as Router, Route , Link, Switch } from "react-router-dom";
import axios from "axios";
import Modal from './ModalDialog'

export class Tabledata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [],
    };
  }

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = `./../../public/js/content.js`;
    script.async = true;
    document.body.appendChild(script);

    axios.get("http://localhost:4000/users").then((res) => {
      console.log(res.data);
      this.setState({
        table: res.data,
      });
    });
  };

  render() {
    return (
      <Router>
      <div>
        <div id="content" className="content">
          <ol className="breadcrumb float-xl-right">
            <li className="breadcrumb-item">
              <a href="javascript:;">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:;">Tables</a>
            </li>
            <li className="breadcrumb-item active">Managed Tables</li>
          </ol>
          <h1 className="page-header">
            Managed Tables <small>header small text goes here...</small>
          </h1>
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">Data Table - Default</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body">
              <Modal/>
              <br/>
              <table
                id="data-table-default"
                className="table table-striped table-bordered table-td-valign-middle"
              >
                <thead>
                  <tr>
                    <th width="1%" />
                    <th width="1%" data-orderable="false" />
                    <th className="text-nowrap">Rendering engine</th>
                    <th className="text-nowrap">Browser</th>
                    <th className="text-nowrap">Platform(s)</th>
                    <th className="text-nowrap">Engine version</th>
                    <th className="text-nowrap">CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.table.map((row) => (
                    <tr className="odd gradeX" key={ row._id }>
                      <td width="1%" className="f-s-600 text-inverse">
                        1
                      </td>
                      <td width="1%" className="with-img">
                        <img
                          src="../assets/img/user/user-1.jpg"
                          className="img-rounded height-30"
                        />
                      </td>
                      <td>{row.firstName}</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td>4</td>
                      <td>
                      <div className="btn-group">
                        <a href="#" className="btn btn-primary dropdown-toggle btn-sm"
                          data-toggle="dropdown"><i className="fas fa-angle-down"></i></a>
                        <ul className="dropdown-menu">
                          <li><a className= "dropdown-item" href="#">Edit</a></li>
                          <li><a className= "dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default Tabledata;
