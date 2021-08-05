import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClientItem extends Component {
  render() {
    return (
      <>
        <div className="col-md-3 col-sm-6 my-3">
          <Link to="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src={this.props.image}
              alt=""
            />
          </Link>
        </div>
      </>
    );
  }
}

export default ClientItem;
