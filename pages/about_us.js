import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

class About extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <div className="px-20 md:pl-40 flex flex-col justify-center items-center my-48">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="title font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-16">About Us</h1>
                  <p>Furrier is an Animal Welfare platform and an Information Hub for current and prospective pet owners, which aims to assist the owners in taking better care for their pets, by connecting them with essential facilities/services and by providing services like health/medication monitoring, diet plans for pets etc.</p>
                  <br />
                  <p>Furthermore, we also aim to Promote and assist adoption of animals and contribute towards other animal welfare programs as well as create awareness regarding prominent issues of Animal Welfare, and propose possible solutions</p>
                </div>
                <div className="hidden lg:inline-block w-full bg-[url('../public/about-us.png')] bg-no-repeat bg-contain" ></div>  
              </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default About;
