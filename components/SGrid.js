import React,{Component} from "react";

class Grid extends Component {
    render() {
    return (
        <div className="service-grid mx-24 mt-56 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-28 text-center">
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?cat')] bg-cover rounded-2xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?tortoise')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?dog')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?turtle')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?sheep')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?hamster')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?cow')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div className="bg-gray-900/[0.1] py-10 px-16 rounded-xl drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-900/[0.2] hover:cursor-pointer">
                <div className ="bg-gray-300 h-48 w-48 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?fish')] bg-cover rounded-2xl drop-shadow-xl" />
                <h2 className="my-8">Vet</h2>
                <p className="w-48 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            </div>
        </div>
    );
    }
}

export default Grid;