import React, { Component } from "react";
import ClientItem from "./ClientItem";
import img1 from "../assets/img/logos/microsoft.svg";
import img2 from "../assets/img/logos/google.svg";
import img3 from "../assets/img/logos/facebook.svg";
import img4 from "../assets/img/logos/ibm.svg";

const client = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];

class Client extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {client.map((item, index) => {
                return <ClientItem {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Client;
