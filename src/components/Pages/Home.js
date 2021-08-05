import React, { Component } from "react";
import Header from "../Common/Header";
import backImg from "../assets/img/header-bg.jpg";

// Re-usable component
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Client from "../Common/Client";

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
        <Services />
        <Portfolio />
        <Team />
        <Client />
      </>
    );
  }
}

export default Home;
