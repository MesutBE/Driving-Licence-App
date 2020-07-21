import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

export default class Home extends Component {
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
      <div>
        <CustomNavbar />
        <Footer />
      </div>
    );
  }
}
