import React,{Component} from "react";
import Navbar from "../components/Navbar";

class about extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="mx-20 md:ml-40 my-32">
            <h1 className="title font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-16">About Us</h1>
            <div>
                <div className=" w-4/6 ">
                <p>Furrier is an Animal Welfare platform and an Information Hub for current and prospective pet owners, which aims to assist the owners in taking better care for their pets, by connecting them with essential facilities/services and by providing services like health/medication monitoring, diet plans for pets etc.</p>
                <br />
                <p>Furthermore, we also aim to Promote and assist adoption of animals and contribute towards other animal welfare programs as well as create awareness regarding prominent issues of Animal Welfare, and propose possible solutions</p>
                </div>
                
            </div>
            </div>
        </div>
    );
    }
}

export default about;