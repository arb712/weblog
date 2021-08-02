import React, { Componenet } from "react";
import { Link } from "react-router-dom";
class Header extends Componenet {
  render() {
    return (
      <>
        <header
          className="masthead"
          style={{ backgroundImage: this.props.image }}
        >
          <div className="container">
            <div className="masthead-subheading">{this.props.title}</div>
            <div className="masthead-heading text-uppercase">
              {this.props.subTitle}
            </div>

            <Link
              className="btn btn-primary btn-xl text-uppercase"
              to={this.props.link}
            >
              {this.props.buttonHeader}
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
