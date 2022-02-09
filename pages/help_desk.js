import React,{Component} from "react";
import Navbar from "../components/Navbar";

class Help extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="  ">
            <h1 className="px-20 font-sans text-3xl font-bold text-gray-600">Help Desk</h1>
            </div>
        </div>
    );
    }
}

export default Help;