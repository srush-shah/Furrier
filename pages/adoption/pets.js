import React,{Component} from "react";
import Navbar from "../../components/Navbar";

class Available extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="">
            <h1 className="title font-sans text-5xl md:text-5xl lg:text-6xl font-bold text-pink-500 mx-20 md:ml-40 mt-32">Available Pets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row my-20 md:my-40 gap-y-10">
            <div className="bg-gray-300 h-48 w-60 mx-auto bg-[url('../public/dogo.png')] bg-cover">
            </div>
            <h1 className="mx-auto text-xl font-semibold inline md:hidden">Dogs</h1>
            <div className="bg-gray-300 h-48 w-60 mx-auto bg-[url('../public/cats.png')] bg-cover">
            </div>
            <h1 className="mx-auto text-xl font-semibold hidden md:inline">Dogs</h1>
            <h1 className="mx-auto text-xl font-semibold">Cats</h1>
            </div>
            </div>
        </div>
    );
    }
}

export default Available;