import React, { Component } from "react";
import Header from "../Common/Header";
import backImg from "../assets/img/header-bg.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <Header
          title="Welcome To Our Studio!"
          subTitle="IT'S NICE TO MEET YOU"
          buttonHeader="TELL ME MORE"
          link="/services"
          showButton={true}
          image={backImg}
        />
      </>
    );
  }
}

export default Home;
