import React,{Component} from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/SGrid";
import {FaPaw} from 'react-icons/fa'

class Services extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="">
            <FaPaw className="absolute top-24 left-32 text-7xl font-bold text-cyan-600"/><span className="title font-sans text-5xl font-bold text-pink-500 mx-auto absolute top-28 left-56"> Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="100vw" viewBox="0 0 1994.315 2524.346" className="services-svg absolute top-32">
            <path id="Path_19" data-name="Path 19" d="M2880,7586.088s161.123-347.938,697.048-135.591c395.51,156.711,355.947,23.6,430.091-39.2,26.192-22.188,66.8-35.586,146.281-24,303.354,44.239,457.558-369.081,637.043,240.155s12.64,2187.94,12.64,2187.94H2879.334Z" transform="translate(-2879.334 -7291.047)" fill="#c8ece9"/>
            </svg>
            <Grid className="z-100" />
            </div>
        </div>
    );
    }
}

export default Services;