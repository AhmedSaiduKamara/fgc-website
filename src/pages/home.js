import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ImNewspaper } from "react-icons/im";
import { GiNuclearWaste } from "react-icons/gi";
import { FaDrumSteelpan } from "react-icons/fa";
import { GiWineGlass } from "react-icons/gi";
import ElectronicIcon from "../components/ElectronicIcon.jsx";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16 hero flex items-center">
        <div className="container mx-auto flex items-center">
          <div className="w-2/3">
            <h1 className="text-7xl font-bold text-white">
              Better Waste Company
            </h1>
            <p className="text-white mt-4 text-2xl">
              We provide smatter plus effective waste solution
            </p>
           <div className="mt-10">
           <Link
              to="/registration"
              type="button"
              className="py-5 px-8 bg-purple-500 text-white mt-5 text-xl rounded-md hover:bg-purple-800"
            >
              Register with us
            </Link>
           </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </section>
      <section className="box-shadow container mx-auto py-16 px-12">
        <h4 className="text-purple-500 font-bold underline text-2xl">
          Who We Are
        </h4>
        <div className="mt-8 w-2/3">
          <h2 className="text-4xl font-bold">
            Fast Garbage Collection Service
          </h2>
          <p className="text-xl mt-2 text-gray-500">
            Solid waste refers to the range of garbage materials—arising from
            animal and human activities—that are discarded as unwanted and
            useless. Solid waste is generated from industrial, residential, and
            commercial activities in a given area, and maybe handled in a
            variety of ways. As such, landfills are typically classified as
            sanitary, municipal, construction and demolition, or industrial
            waste sites.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div>
          <h4 className="text-purple-500 font-bold underline text-2xl text-center">
            Types of Waste
          </h4>
          <h2 className="text-4xl font-bold text-center mt-5">
            Materials We Collect
          </h2>
          <div className="container mx-auto shadow-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-12 px-10">
            <div className="flex items-center justify-center">
              <div className="border p-12 shadow">
                <ImNewspaper className="text-9xl" />
                <h3 className="text-center text-3xl font-bold mt-10">Papper</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border p-12 shadow">
                <GiNuclearWaste className="text-9xl" />
                <h3 className="text-center text-3xl font-bold mt-10">
                  Plastic
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border p-12 shadow">
                <FaDrumSteelpan className="text-9xl" />
                <h3 className="text-center text-3xl font-bold mt-10">Metal</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border p-12 shadow">
                <GiWineGlass className="text-9xl" />
                <h3 className="text-center text-3xl font-bold mt-10">Glass</h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border p-12 shadow">
                <ElectronicIcon />
                <h3 className="text-center text-3xl font-bold mt-10">
                  Electronics
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container mx-auto">
          <h4 className="text-purple-500 font-bold underline text-2xl text-center">
            Services
          </h4>
          <h2 className="text-4xl font-bold text-center mt-5">
            Services for Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-12">
            <div className="card mx-5 rounded-md overflow-hidden">
              <img src="../../images/hotel.jpg" alt="Service 1" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Hotels</h3>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden">
              <img src="../../images/restaurant.jpg" alt="Service 1" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Restaurants</h3>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden">
              <img src="../../images/grocery.jpeg" alt="Service 1" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Grocery Stores</h3>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden">
              <img src="../../images/hospitals.jpeg" alt="Service 1" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Hospitals</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mt-12 container mx-auto flex">
          <div className="w-2/5">
            <h4 className="text-purple-500 font-bold underline text-2xl">
              Testimonials
            </h4>
            <h2 className="text-4xl font-bold text-center mt-5">
              What People Are Saying About Us
            </h2>
          </div>
          <div className="w-3/5 pl-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mr-10">
                <h4 className="text-xl font-semibold">Honorable Sheriff</h4>
                <p className="italic text-gray-500">
                  {" "}
                  <span className="text-4xl">"</span> Works very efficiently and
                  well. Always a pillar to rely on in terms of solid waste in
                  our community.
                </p>
              </div>
              <div className="mr-10">
                <h4 className="text-xl font-semibold">Community Resident</h4>
                <p className="italic text-gray-500">
                  {" "}
                  <span className="text-4xl">"</span> Since the introduction of
                  Fast Garbage Collection in our community, the air seems
                  healthier and fresher than before. Thanks to these guys, they
                  doing a great job!!!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="mr-10">
                <h4 className="text-xl font-semibold">Radisson Blu Manager</h4>
                <p className="italic text-gray-500">
                  {" "}
                  <span className="text-4xl">"</span> Fast Garbage Collection is
                  exceptionally great, it’s just one of a kind
                </p>
              </div>
              <div className="mr-10">
                <h4 className="text-xl font-semibold">
                  Freetown City Council Worker
                </h4>
                <p className="italic text-gray-500">
                  {" "}
                  <span className="text-4xl">"</span> I believe by what am
                  seeing in reality now, Fast Garbage Collection will change the
                  face of environmental sanitation in this community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
