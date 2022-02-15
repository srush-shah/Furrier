import React,{Component} from "react";
import Navbar from "../components/Navbar";
import {BiSearchAlt} from "react-icons/bi";
import Footer from "../components/Footer";

class Help extends Component {
    render() {
    return (
        <div>
            <Navbar />
            <div className="mx-20 md:ml-40 my-32">
            <div className="flex">
            <h1 className="flex-grow title font-sans text-5xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-16">FAQs</h1>
            <form className="relative">
                <input type="text" placeholder="Search.." className="border-2 p-3 rounded-full" /><BiSearchAlt className="absolute top-5 right-5"/>
            </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="font-bold">1. Where are you located(From where can I adopt a pet)? </h2>
                    <p>Currently, We are located at Ahmedabad/Gandhinagar.</p>
                    <br/>

                    <h2 className="font-bold">2. How long does the adoption process take?</h2>
                    <p>The length of time that adoption takes varies widely by type of pet, the number of meet-and-greets required, whether the pet is in the shelter or in foster care, and the availability of open appointments.</p>
                    <br/>

                    <h2 className="font-bold">3.  If I have other pets, is that okay to adopt more?</h2>
                    <p>Yes! We want to make sure that the animal you're interested in adopting would be compatible with any current pets you’re having in your household. Dogs and rabbits may require the same species to meet up.</p>
                    <br/>   

                    <h2 className="font-bold">4. How much does it cost to adopt pets?</h2>
                    <p>Review our -- (link to cost for adoption page)--   for the cost of adoption. Adopters of dogs, cats, miniature goats, and potbellied pigs who live in Seattle or King County must also purchase a two-year altered at the time of adoption.</p>
                    <br/>

                    <h2 className="font-bold">5. Are there any requirements for adoption?</h2>
                    <p>Having a companion animal brings rewards and responsibilities. Following your pet’s adoption, you will be responsible for making sure your pet is safe and for providing regular veterinary care. Be sure your dog has appropriate identification. Provide nutritious food and fresh water for your pet. Make time for exercise, training, and play. Finally, enjoy your new life with your new loving companion</p>
                    <br/>

                    <h2 className="font-bold">6. Are those all animals unwanted pets?</h2>
                    <p>Some of our animals are puppies and kittens that will be starting their lives as companions. Older dogs and cats may have had previous owners, and you may have to re-educate these animals to some degree. However, they may have already been familiar with living in a home and have been exposed to house-breaking, litter boxes, and obedience training. Remember too, that, companion animals are remarkably adaptable. They have lots of love to give and they really seem to appreciate their new homes. Just because they lived with someone else first, doesn’t mean they won’t make a wonderful companion for you.</p>
                    <br/>
                </div>
                <div>
                <h2 className="font-bold">7. What if I’m having any problems with pets?</h2>
                    <p>Staff members are available for telephone consultations. Being a foster home is extremely rewarding. However, you should keep in mind that many, but not all, rescue animals are housebroken or may have had little socialization or obedience training. We find that when given a chance these animals not only improve, they flourish in their foster care environment.
                    </p>
                    <br/>

                    <h2 className="font-bold">8. What If I Want To Travel?</h2>
                    <p>If you are fostering and want to go away for a weekend or take a vacation, the foster cat or dog can be returned to the coordinator`s care while you are away. Just arrange it in advance, as soon as you know, and we’ll reserve a spot.
                    </p>
                    <br/>

                    <h2 className="font-bold">9. What are your hours?</h2>
                    <p>Viewing and Adoption Hours for Cats & Dogs
                    In order to process the application, we are not able to send pets home with adopters on the same day; after submitting an application to adopt, an adoption counselor will help you schedule an appointment to finalize your adoption on a future date.</p>
                    <br/>

                    <h2 className="font-bold">10. How can I volunteer to help animals?</h2>
                    <p>Thank you for your interest in volunteering! Because we aren’t affiliated with your local shelter or animal welfare agency, we can't give you specific information about external opportunities.</p>
                    <br/>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
    }
}

export default Help;