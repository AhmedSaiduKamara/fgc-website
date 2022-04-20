import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const Services = () => {

  return (
    <div>
      <Navbar />
      <section className="py-16 services-hero flex items-center">
        <div className="container mx-auto flex items-center">
          <div className="w-2/3">
            <h1 className="text-5xl font-bold text-white">
              Get Better Services at Fast Garbage Collection
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
      <section className="pt-24 pb-32 bg-gray-100">
        <div className="container mx-auto">
          <h4 className="text-purple-500 font-bold underline text-2xl text-center">
            Services
          </h4>
          <h2 className="text-4xl font-bold text-center mt-5">
            Services for Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/hotel.jpg" alt="Service 1" />
              <div className="p-10">
                <div className="mb-2">
                  <h3 className="text-2xl font-semibold">Hotels</h3>
                  <p className="mt-2">
                    Waste management in hotels is important as it is getting
                    increasingly difficult to dispose of waste. Moreover, it
                    makes good sense to the business. When supplies are
                    judiciously used it saves a lot of money on raw materials.
                    You can generate additional income by selling old resources
                    and by reusing and recycling useful materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/restaurant.jpg" alt="Restaurant" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Restaurants</h3>
                <p className="mt-2">
                  Waste management in restaurant is important as it is getting
                  increasingly difficult to dispose of waste. Moreover, it makes
                  good sense to the business. When supplies are judiciously used
                  it saves a lot of money on raw materials. You can generate
                  additional income by selling old resources and by reusing and
                  recycling useful materials.
                </p>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/grocery.jpeg" alt="Grocery" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Grocery Stores</h3>
                <p className="mt-2">
                  Waste management in grocery is important as it is getting
                  increasingly difficult to dispose of waste. Moreover, it makes
                  good sense to the business. When supplies are judiciously used
                  it saves a lot of money on raw materials. You can generate
                  additional income by selling old resources and by reusing and
                  recycling useful materials.
                </p>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/hospitals.jpeg" alt="Hospital" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Hospitals</h3>
                <p className="mt-2">
                  Waste management in hospital is important as it is getting
                  increasingly difficult to dispose of waste. Moreover, it makes
                  good sense to the business. When supplies are judiciously used
                  it saves a lot of money on raw materials. You can generate
                  additional income by selling old resources and by reusing and
                  recycling useful materials.
                </p>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/residential.jpeg" alt="Residential" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Residential</h3>
                <p className="mt-2">
                  Waste management in residential is important as it is getting
                  increasingly difficult to dispose of waste. Moreover, it makes
                  good sense to the business. When supplies are judiciously used
                  it saves a lot of money on raw materials. You can generate
                  additional income by selling old resources and by reusing and
                  recycling useful materials.
                </p>
              </div>
            </div>
            <div className="card mx-5 rounded-md overflow-hidden mb-12">
              <img src="../../images/beach.jpeg" alt="Beach" />
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Beach</h3>
                <p className="mt-2">
                  Waste management in beach is important as it is getting
                  increasingly difficult to dispose of waste. Moreover, it makes
                  good sense to the business. When supplies are judiciously used
                  it saves a lot of money on raw materials. You can generate
                  additional income by selling old resources and by reusing and
                  recycling useful materials.
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

export default Services;
