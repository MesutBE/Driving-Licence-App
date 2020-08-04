import React, { Component } from "react";
import Picture from "./components/home/Picture";
import Cards from "./components/home/Cards";
import Practice from "./components/home/Practice";
import Footer from "./components/home/Footer";
import CustomNavbar from "./components/home/CustomNavbar";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <Picture />
        <Cards />
        <Practice />
        <Footer />
      </>
    );
  }
}
