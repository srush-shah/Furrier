import React,{Component} from "react";
import Navbar from "../../components/Navbar";

class Guidelines extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="mx-20 md:ml-40 my-32">
            <h1 className="title font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-16">Guideliness for Adoption</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-20 mb-10">
                <div>
                    <h2 className="font-bold">Application</h2>
                    <br/>
                    <p>The first pet adoption requirement is to submit an application. Most shelters and rescues take applications on a first-come basis, so if you see a dog or cat you’re interested in, make sure you’re ready to fill out and submit the application quickly. </p>
                    <br />
                    <p>The application can be a straightforward questionnaire or a more in-depth survey. You may also need to provide references, verify that your landlord allows pets, submit income verification, or complete a home visit before your application is accepted.</p>
                    <br/>

                    <h2 className="font-bold">Home Visit</h2>
                    <br/>
                    <p>Shelters and rescues may want a specific environment for the cats or dogs that they adopt out. A representative of the organization may visit your home to make sure your home is suitable and safe for the pet. A larger dog may require a fenced yard or a senior pet may need a home without stairs. Staff will let you know if a home visit is needed before adopting a pet. Age Requirements. </p>
                    <br />
                    <p>Most shelters and rescues will require you to be at least 18 years old to adopt a pet.</p>
                    <br/>
                </div>
                <div>
                    <h2 className="font-bold">Valid Identification</h2>
                    <br/>
                    <p>In order to verify your age and where you live, you’ll need to provide valid identification to shelter or rescue staff. Family Meet and Greet</p>
                    <br />
                    <p>It’s a good idea to make sure everyone in the family gets along with the new pet, which is why most shelters and rescues require a family meet-and-greet before adoption. Everyone in the home, including dogs and cats that already live with you, should meet the pet you want to adopt to see if they’ll be a good fit for your family. Shelter staff wants to see that a pet is adopted into a comfortable and loving environment.</p>
                    <br/>

                    <h2 className="font-bold">Adoption Fee</h2>
                    <br/>
                    <p>Lastly, depending on where you decide to adopt a pet from, the adoption fee will vary in costs. The adoption fee typically covers basic veterinary care (like initial shots, microchipping, and spay or neuter), as well as housing, food, and transportation the pet received while they were in the care of the shelter or rescue.</p>
                    <br />
                    <p>Each shelter and rescue have different requirements to adopt a dog or cat, but these details can help them to ensure that an animal is adopted into a safe home. Check their website before visiting to know what to bring with you so the application process is quick and smooth.</p>
                    <br/>
                </div>
            </div>
            <button className="border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-6 font-bold text-pink-500 text-xl hover:shadow-lg w-full md:w-52">Available Pets</button>
            </div>
        </div>
    );
    }
}

export default Guidelines;