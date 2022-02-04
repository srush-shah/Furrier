import React,{Component} from "react";
import Image from 'next/image';

class Navbar extends Component {
    render() {
    return (
        <div className="pt-2 flex mb-8">
           <div className="flex-none flex w-28 items-center my-auto border-r-2 border-b-2 border-gray-200 rounded-r-full">
               <Image src="/logo.png" alt="Vercel Logo" height="80px" width="100px" className=""/>
           </div>
           <div className="grow"></div>
           <ul className="flex-none flex nav-ul">
               <li><a href="#">Home</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Adoption</a></li>
               <li><a href="#">Help Desk</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Profile</a></li>
           </ul>
           <div className="grow"></div>
        </div>
    );
    }
}

export default Navbar;