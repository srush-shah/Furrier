import React,{Component} from "react";

class Grid extends Component {
    render() {
    return (
        <div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-x-32 gap-y-40 text-center">
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?cats')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Vet</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?fish')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Trainers</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?counsellor')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Counsellors</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?dogs')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Day Care/Hostels</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?cows')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Foster Care</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?petsitters')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Pet Sitters</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?petshops')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Pet Shops</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            <div>
                <div className ="bg-gray-300 h-48 w-52 mx-auto bg-[url('https://source.unsplash.com/random/100×100/?grooming')] bg-cover rounded-2xl shadow-lg shadow-slate-600" />
                <h2 className="mt-10 mb-4 text-2xl text-emerald-600 font-semibold">Grooming Centers</h2>
                <p className="w-52 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            </div>
            </div>
        </div>
    );
    }
}

export default Grid;