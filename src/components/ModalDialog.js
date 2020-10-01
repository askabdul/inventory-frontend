import React, { Component } from "react";

export class ModalDialog extends Component {
  render() {
    return (
      <div>
        <a href="#modal-dialog" className="btn btn-sm btn-success" data-toggle="modal">Add a product</a>

        <div className="modal fade" id="modal-dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Adding Product Dialog</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                    <div className="form-group row m-b-15">
                        <label className="col-md-6 col-form-label">
                            <input type="text" className="form-control" placeholder="Product Name" />
                        </label>
                        <label className="col-md-6 col-form-label">
                            <input type="number" className="form-control" placeholder="Purchase Price" />
                        </label>
                    </div>
                    <div className="form-group row m-b-15">
                        <label className="col-md-12 col-form-label">
                            <input type="number" className="form-control" placeholder="Selling Price" />
                        </label>
                    </div>
              </div>
              <div className="modal-footer">
                <a
                  href="javascript:;"
                  className="btn btn-white"
                  data-dismiss="modal"
                >
                  Close
                </a>
                <a href="javascript:;" className="btn btn-success">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDialog;
