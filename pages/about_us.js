import React, { Component } from "react";
import Navbar from "../components/Navbar";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="  ">
          <h1 className="px-20 font-sans text-3xl font-bold text-gray-600">
            About Us
          </h1>
        </div>
      </div>
    );
  }
}

export default About;
