import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div id="content" className="content">
          <ol className="breadcrumb float-xl-right">
            <li className="breadcrumb-item">
              <a href="# ">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <h1 className="page-header">
            Dashboard <small>header small text goes here...</small>
          </h1>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-blue">
                <div className="stats-icon">
                  <i className="fa fa-desktop" />
                </div>
                <div className="stats-info">
                  <h4>TOTAL VISITORS</h4>
                  <p>3,291,922</p>
                </div>
                <div className="stats-link">
                  <a href="# ">
                    View Detail <i className="fa fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-info">
                <div className="stats-icon">
                  <i className="fa fa-link" />
                </div>
                <div className="stats-info">
                  <h4>BOUNCE RATE</h4>
                  <p>20.44%</p>
                </div>
                <div className="stats-link">
                  <a href="# ">
                    View Detail <i className="fa fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-orange">
                <div className="stats-icon">
                  <i className="fa fa-users" />
                </div>
                <div className="stats-info">
                  <h4>UNIQUE VISITORS</h4>
                  <p>1,291,922</p>
                </div>
                <div className="stats-link">
                  <a href="# ">
                    View Detail <i className="fa fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-stats bg-red">
                <div className="stats-icon">
                  <i className="fa fa-clock" />
                </div>
                <div className="stats-info">
                  <h4>AVG TIME ON SITE</h4>
                  <p>00:12:23</p>
                </div>
                <div className="stats-link">
                  <a href="# ">
                    View Detail <i className="fa fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="panel panel-inverse" data-sortable-id="index-1">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    Website Analytics (Last 7 Days)
                  </h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body pr-1">
                  <div id="interactive-chart" className="height-sm" />
                </div>
              </div>
              <ul
                className="nav nav-tabs nav-tabs-inverse nav-justified nav-justified-mobile"
                data-sortable-id="index-2"
              >
                <li className="nav-item">
                  <a
                    href="#latest-post"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    <i className="fa fa-camera fa-lg m-r-5" />{" "}
                    <span className="d-none d-md-inline">Latest Post</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#purchase" data-toggle="tab" className="nav-link">
                    <i className="fa fa-archive fa-lg m-r-5" />{" "}
                    <span className="d-none d-md-inline">Purchase</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#email" data-toggle="tab" className="nav-link">
                    <i className="fa fa-envelope fa-lg m-r-5" />{" "}
                    <span className="d-none d-md-inline">Email</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content" data-sortable-id="index-3">
                <div className="tab-pane fade active show" id="latest-post">
                  <div className="height-sm" data-scrollbar="true">
                    <ul className="media-list media-list-with-divider">
                      <li className="media media-lg">
                        <a href="# " className="pull-left">
                          <img
                            className="media-object rounded"
                            src="../assets/img/gallery/gallery-1.jpg"
                            alt="gallery-1"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">
                            Aenean viverra arcu nec pellentesque ultrices. In
                            erat purus, adipiscing nec lacinia at, ornare ac
                            eros.
                          </h5>
                          Nullam at risus metus. Quisque nisl purus, pulvinar ut
                          mauris vel, elementum suscipit eros. Praesent ornare
                          ante massa, egestas pellentesque orci convallis ut.
                          Curabitur consequat convallis est, id luctus mauris
                          lacinia vel. Nullam tristique lobortis mauris,
                          ultricies fermentum lacus bibendum id. Proin non ante
                          tortor. Suspendisse pulvinar ornare tellus nec
                          pulvinar. Nam pellentesque accumsan mi, non
                          pellentesque sem convallis sed. Quisque rutrum erat id
                          auctor gravida.
                        </div>
                      </li>
                      <li className="media media-lg">
                        <a href="# " className="pull-left">
                          <img
                            className="media-object rounded"
                            src="../assets/img/gallery/gallery-10.jpg"
                            alt="gallery-10"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">
                            Vestibulum vitae diam nec odio dapibus placerat. Ut
                            ut lorem justo.
                          </h5>
                          Fusce bibendum augue nec fermentum tempus. Sed laoreet
                          dictum tempus. Aenean ac sem quis nulla malesuada
                          volutpat. Nunc vitae urna pulvinar velit commodo
                          cursus. Nullam eu felis quis diam adipiscing hendrerit
                          vel ac turpis. Nam mattis fringilla euismod. Donec eu
                          ipsum sit amet mauris iaculis aliquet. Quisque sit
                          amet feugiat odio. Cras convallis lorem at libero
                          lobortis, placerat lobortis sapien lacinia. Duis sit
                          amet elit bibendum sapien dignissim bibendum.
                        </div>
                      </li>
                      <li className="media media-lg">
                        <a href="# " className="pull-left">
                          <img
                            className="media-object rounded"
                            src="../assets/img/gallery/gallery-7.jpg"
                            alt= "gallery-7"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">
                            Maecenas eget turpis luctus, scelerisque arcu id,
                            iaculis urna. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus.
                          </h5>
                          Morbi placerat est nec pharetra placerat. Ut laoreet
                          nunc accumsan orci aliquam accumsan. Maecenas volutpat
                          dolor vitae sapien ultricies fringilla. Suspendisse
                          vitae orci sed nibh ultrices tristique. Aenean in ante
                          eget urna semper imperdiet. Pellentesque sagittis a
                          nulla at scelerisque. Nam augue nulla, accumsan quis
                          nisi a, facilisis eleifend nulla. Praesent aliquet
                          odio non imperdiet fringilla. Morbi a porta nunc.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae.
                        </div>
                      </li>
                      <li className="media media-lg">
                        <a href="# " className="pull-left">
                          <img
                            className="media-object rounded"
                            src="../assets/img/gallery/gallery-8.jpg"
                            alt="gallery-8"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec auctor accumsan rutrum.
                          </h5>
                          Fusce augue diam, vestibulum a mattis sit amet,
                          vehicula eu ipsum. Vestibulum eu mi nec purus tempor
                          consequat. Vestibulum porta non mi quis cursus. Fusce
                          vulputate cursus magna, tincidunt sodales ipsum
                          lobortis tincidunt. Mauris quis lorem ligula. Morbi
                          placerat est nec pharetra placerat. Ut laoreet nunc
                          accumsan orci aliquam accumsan. Maecenas volutpat
                          dolor vitae sapien ultricies fringilla. Suspendisse
                          vitae orci sed nibh ultrices tristique. Aenean in ante
                          eget urna semper imperdiet. Pellentesque sagittis a
                          nulla at scelerisque.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="purchase">
                  <div className="height-sm" data-scrollbar="true">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th className="hidden-sm text-center">Product</th>
                          <th />
                          <th>Amount</th>
                          <th>User</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="f-w-600 text-muted">13/02/2013</td>
                          <td className="hidden-sm text-center">
                            <a href="# ">
                              <img
                                src="../assets/img/product/product-1.png"
                                alt = "product-1"
                                width="32px"
                              />
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <h6>
                              <a href="# " className="text-inverse">
                                Nunc eleifend lorem eu velit eleifend, <br />
                                eget faucibus nibh placerat.
                              </a>
                            </h6>
                          </td>
                          <td className="text-blue f-w-600">$349.00</td>
                          <td className="text-nowrap">
                            <a href="# " className="text-inverse">
                              Derick Wong
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="f-w-600 text-muted">13/02/2013</td>
                          <td className="hidden-sm text-center">
                            <a href="# ">
                              <img
                                src="../assets/img/product/product-2.png"
                                alt = "product-2"
                                width="32px"
                              />
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <h6>
                              <a href="# " className="text-inverse">
                                Nunc eleifend lorem eu velit eleifend, <br />
                                eget faucibus nibh placerat.
                              </a>
                            </h6>
                          </td>
                          <td className="text-blue f-w-600">$399.00</td>
                          <td className="text-nowrap">
                            <a href="# " className="text-inverse">
                              Derick Wong
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="f-w-600 text-muted">13/02/2013</td>
                          <td className="hidden-sm text-center">
                            <a href="# ">
                              <img
                                src="../assets/img/product/product-3.png"
                                alt = "product-3"
                                width="32px"
                              />
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <h6>
                              <a href="# " className="text-inverse">
                                Nunc eleifend lorem eu velit eleifend, <br />
                                eget faucibus nibh placerat.
                              </a>
                            </h6>
                          </td>
                          <td className="text-blue f-w-600">$499.00</td>
                          <td className="text-nowrap">
                            <a href="# " className="text-inverse">
                              Derick Wong
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="f-w-600 text-muted">13/02/2013</td>
                          <td className="hidden-sm text-center">
                            <a href="# ">
                              <img
                                src="../assets/img/product/product-4.png"
                                alt="product-4"
                                width="32px"
                              />
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <h6>
                              <a href="# " className="text-inverse">
                                Nunc eleifend lorem eu velit eleifend, <br />
                                eget faucibus nibh placerat.
                              </a>
                            </h6>
                          </td>
                          <td className="text-blue f-w-600">$230.00</td>
                          <td className="text-nowrap">
                            <a href="# " className="text-inverse">
                              Derick Wong
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="f-w-600 text-muted">13/02/2013</td>
                          <td className="hidden-sm text-center">
                            <a href="# ">
                              <img
                                src="../assets/img/product/product-5.png"
                                alt="product-5"
                                width="32px"
                              />
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <h6>
                              <a href="# " className="text-inverse">
                                Nunc eleifend lorem eu velit eleifend, <br />
                                eget faucibus nibh placerat.
                              </a>
                            </h6>
                          </td>
                          <td className="text-blue f-w-600">$500.00</td>
                          <td className="text-nowrap">
                            <a href="# " className="text-inverse">
                              Derick Wong
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="email">
                  <div className="height-sm" data-scrollbar="true">
                    <ul className="media-list media-list-with-divider">
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-1.jpg"
                            alt
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <a href="# " className="text-inverse">
                            <h5 className="media-heading">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                          </a>
                          <p className="m-b-5">
                            Aenean mollis arcu sed turpis accumsan dignissim.
                            Etiam vel tortor at risus tristique convallis. Donec
                            adipiscing euismod arcu id euismod. Suspendisse
                            potenti. Aliquam lacinia sapien ac urna placerat, eu
                            interdum mauris viverra.
                          </p>
                          <span className="text-muted f-s-11 f-w-600">
                            Received on 04/16/2013, 12.39pm
                          </span>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-2.jpg"
                            alt
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <a href="# " className="text-inverse">
                            <h5 className="media-heading">
                              Praesent et sem porta leo tempus tincidunt
                              eleifend et arcu.
                            </h5>
                          </a>
                          <p className="m-b-5">
                            Proin adipiscing dui nulla. Duis pharetra vel sem ac
                            adipiscing. Vestibulum ut porta leo. Pellentesque
                            orci neque, tempor ornare purus nec, fringilla
                            venenatis elit. Duis at est non nisl dapibus
                            lacinia.
                          </p>
                          <span className="text-muted f-s-11 f-w-600">
                            Received on 04/16/2013, 12.39pm
                          </span>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-3.jpg"
                            alt
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <a href="# " className="text-inverse">
                            <h5 className="media-heading">
                              Ut mi eros, varius nec mi vel, consectetur
                              convallis diam.
                            </h5>
                          </a>
                          <p className="m-b-5">
                            Ut mi eros, varius nec mi vel, consectetur convallis
                            diam. Nullam eget hendrerit eros. Duis lacinia
                            condimentum justo at ultrices. Phasellus sapien
                            arcu, fringilla eu pulvinar id, mattis quis mauris.
                          </p>
                          <span className="text-muted f-s-11 f-w-600">
                            Received on 04/16/2013, 12.39pm
                          </span>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-4.jpg"
                            alt
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <a href="# " className="text-inverse">
                            <h5 className="media-heading">
                              Aliquam nec dolor vel nisl dictum ullamcorper.
                            </h5>
                          </a>
                          <p className="m-b-5">
                            Aliquam nec dolor vel nisl dictum ullamcorper. Duis
                            vel magna enim. Aenean volutpat a dui vitae
                            pulvinar. Nullam ligula mauris, dictum eu
                            ullamcorper quis, lacinia nec mauris.
                          </p>
                          <span className="text-muted f-s-11 f-w-600">
                            Received on 04/16/2013, 12.39pm
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="panel panel-inverse" data-sortable-id="index-4">
                <div className="panel-heading">
                  <h4 className="panel-title">Quick Post</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-toolbar">
                  <div className="btn-group m-r-5">
                    <a className="btn btn-white" href="# ">
                      <i className="fa fa-bold" />
                    </a>
                    <a className="btn btn-white active" href="# ">
                      <i className="fa fa-italic" />
                    </a>
                    <a className="btn btn-white" href="# ">
                      <i className="fa fa-underline" />
                    </a>
                  </div>
                  <div className="btn-group">
                    <a className="btn btn-white" href="# ">
                      <i className="fa fa-align-left" />
                    </a>
                    <a className="btn btn-white active" href="# ">
                      <i className="fa fa-align-center" />
                    </a>
                    <a className="btn btn-white" href="# ">
                      <i className="fa fa-align-right" />
                    </a>
                    <a className="btn btn-white" href="# ">
                      <i className="fa fa-align-justify" />
                    </a>
                  </div>
                </div>
                <textarea
                  className="form-control rounded-0 bg-light p-15"
                  rows={14}
                  defaultValue={"Enter some comment."}
                />
                <div className="panel-footer text-right">
                  <a href="# " className="btn btn-white btn-sm">
                    Cancel
                  </a>
                  <a
                    href="# "
                    className="btn btn-primary btn-sm m-l-5"
                  >
                    Action
                  </a>
                </div>
              </div>
              <div className="panel panel-inverse" data-sortable-id="index-5">
                <div className="panel-heading">
                  <h4 className="panel-title">Message</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="height-sm" data-scrollbar="true">
                    <ul className="media-list media-list-with-divider media-messaging">
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-5.jpg"
                            alt="user-5"
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">John Doe</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi id nunc non eros fermentum vestibulum ut
                            id felis. Nunc molestie libero eget urna aliquet,
                            vitae laoreet felis ultricies. Fusce sit amet massa
                            malesuada, tincidunt augue vitae, gravida felis.
                          </p>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-6.jpg"
                            alt="user-6"
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">Terry Ng</h5>
                          <p>
                            Sed in ante vel ipsum tristique euismod posuere eget
                            nulla. Quisque ante sem, scelerisque iaculis
                            interdum quis, eleifend id mi. Fusce congue leo nec
                            mauris malesuada, id scelerisque sapien ultricies.
                          </p>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-8.jpg"
                            alt="user-8"
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">Fiona Log</h5>
                          <p>
                            Pellentesque dictum in tortor ac blandit. Nulla
                            rutrum eu leo vulputate ornare. Nulla a semper mi,
                            ac lacinia sapien. Sed volutpat ornare eros, vel
                            semper sem sagittis in. Quisque risus ipsum, iaculis
                            quis cursus eu, tristique sed nulla.
                          </p>
                        </div>
                      </li>
                      <li className="media media-sm">
                        <a href="# " className="pull-left">
                          <img
                            src="../assets/img/user/user-7.jpg"
                            alt="user-7"
                            className="media-object rounded-corner"
                          />
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">John Doe</h5>
                          <p>
                            Morbi molestie lorem quis accumsan elementum. Morbi
                            condimentum nisl iaculis, laoreet risus sed, porta
                            neque. Proin mi leo, dapibus at ligula a, aliquam
                            consectetur metus.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="panel-footer">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Enter message"
                      />
                      <span className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fa fa-pencil-alt" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="panel panel-inverse" data-sortable-id="index-6">
                <div className="panel-heading">
                  <h4 className="panel-title">Analytics Details</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-valign-middle table-panel mb-0">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Total</th>
                        <th>Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="label label-danger">
                            Unique Visitor
                          </label>
                        </td>
                        <td>
                          13,203{" "}
                          <span className="text-success">
                            <i className="fa fa-arrow-up" />
                          </span>
                        </td>
                        <td>
                          <div id="sparkline-unique-visitor" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="label label-warning">
                            Bounce Rate
                          </label>
                        </td>
                        <td>28.2%</td>
                        <td>
                          <div id="sparkline-bounce-rate" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="label label-success">
                            Total Page Views
                          </label>
                        </td>
                        <td>1,230,030</td>
                        <td>
                          <div id="sparkline-total-page-views" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="label label-primary">
                            Avg Time On Site
                          </label>
                        </td>
                        <td>00:03:45</td>
                        <td>
                          <div id="sparkline-avg-time-on-site" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="label label-default">
                            % New Visits
                          </label>
                        </td>
                        <td>40.5%</td>
                        <td>
                          <div id="sparkline-new-visits" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="label label-inverse">
                            Return Visitors
                          </label>
                        </td>
                        <td>73.4%</td>
                        <td>
                          <div id="sparkline-return-visitors" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="panel panel-inverse" data-sortable-id="index-7">
                <div className="panel-heading">
                  <h4 className="panel-title">Visitors User Agent</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div id="donut-chart" className="height-sm" />
                </div>
              </div>
              <div className="panel panel-inverse" data-sortable-id="index-8">
                <div className="panel-heading">
                  <h4 className="panel-title">Todo List</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body p-0">
                  <ul className="todolist">
                    <li className="active">
                      <a
                        href="# "
                        className="todolist-container active"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Donec vehicula pretium nisl, id lacinia nisl tincidunt
                          id.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Duis a ullamcorper massa.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Phasellus bibendum, odio nec vestibulum ullamcorper.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Duis pharetra mi sit amet dictum congue.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Duis pharetra mi sit amet dictum congue.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Phasellus bibendum, odio nec vestibulum ullamcorper.
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        className="todolist-container active"
                        data-click="todolist"
                      >
                        <div className="todolist-input">
                          <i className="fa fa-square" />
                        </div>
                        <div className="todolist-title">
                          Donec vehicula pretium nisl, id lacinia nisl tincidunt
                          id.
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="panel panel-inverse bg-dark"
                data-sortable-id="index-9"
              >
                <div className="panel-heading">
                  <h4 className="panel-title">World Visitors</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body p-0">
                  <div id="world-map" className="height-sm width-full" />
                </div>
              </div>
              <div className="panel panel-inverse" data-sortable-id="index-10">
                <div className="panel-heading">
                  <h4 className="panel-title">Calendar</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-default"
                      data-click="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-success"
                      data-click="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-warning"
                      data-click="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="# "
                      className="btn btn-xs btn-icon btn-circle btn-danger"
                      data-click="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div
                    id="datepicker-inline"
                    className="datepicker-full-width overflow-y-scroll position-relative"
                  >
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


