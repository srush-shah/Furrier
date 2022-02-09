import React,{Component} from "react";
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';



export default function Navbar() {
    const router = useRouter();

    return (
        <div className="pt-2 flex mb-6">
           <div className="flex-none flex w-28 items-center my-auto border-r-2 border-b-2 border-gray-200 rounded-r-full">
               <Image src="/logo.png" alt="Vercel Logo" height="80px" width="100px" className=""/>
           </div>
           <div className="grow"></div>
           <ul className="flex-none flex nav-ul">
               <li><Link href="/"><a href="#" className={router.pathname == "/" ? "active" : ""}>Home</a></Link></li>
               <li><Link href="/services"><a href="#" className={router.pathname == "/services" ? "active" : ""}>Services Made changes</a></Link></li>
               <li><Link href="/adoption"><a href="#" className={router.pathname == "/adoption" ? "active" : ""}>Adoption</a></Link></li>
               <li><Link href="/help_desk"><a href="#" className={router.pathname == "/help_desk" ? "active" : ""}>Help Desk</a></Link></li>
               <li><Link href="/about_us"><a href="#" className={router.pathname == "/about_us" ? "active" : ""}>About Us</a></Link></li>
               <li><Link href="/profile"><a href="#" className={router.pathname == "/profile" ? "active" : ""}>Profile</a></Link></li>
           </ul>
           <div className="grow"></div>
        </div>
    );
}
