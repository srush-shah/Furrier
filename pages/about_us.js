import React,{Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

class about extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <section class="text-gray-600 body-font h-min-screen md:my-20">
            <div class="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">About Us
                    <br class="hidden lg:inline-block" />
                </h1>
                <p class="mb-8 leading-relaxed">Furrier is an Animal Welfare platform and an Information Hub for current and prospective pet owners, which aims to assist the owners in taking better care for their pets, by connecting them with essential facilities/services and by providing services like health/medication monitoring, diet plans for pets etc. Furthermore, we also aim to Promote and assist adoption of animals and contribute towards other animal welfare programs as well as create awareness regarding prominent issues of Animal Welfare, and propose possible solutions</p>
                </div>
                <div class="lg:max-w-lg lg:w-1/2 md:w-1/2">
                <img class="object-cover object-center rounded" alt="hero" src="/about-us.png"></img>
                </div>
            </div>
            </section>
            <Footer />
        </div>
    );
    }
}

export default about;