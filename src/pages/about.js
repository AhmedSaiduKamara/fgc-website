import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="py-24 newsletter-hero h-72 flex items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-5xl">About US</h1>
        </div>
      </section>
      <section className="pt-16 pb-32">
        <div className="container mx-auto flex">
          <div className="box-shadow w-2/5 mt-16 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src="../../images/group-pic.jpg" alt="" />
            </div>
          </div>
          <div className="w-3/5 pt-32 px-16">
            <h4 className="text-purple-500 font-bold underline text-2xl">
              Who We Are
            </h4>
            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Leading Waste Garbage Collection Services
            </h2>
            <p className="text-lg text-gray-600 mt-5">
              Solid waste refers to the range of garbage materials—arising from
              animal and human activities—that are discarded as unwanted and
              useless. Solid waste is generated from industrial, residential,
              and commercial activities in a given area, and maybe handled in a
              variety of ways. As such, landfills are typically classified as
              sanitary, municipal, construction and demolition, or industrial
              waste sites. Feasible advancement is key to the annihilation of
              destitution from the world. Driven by the idea that no one ought
              to be cleared out behind, the world concurred on the Economic
              Advancement Objectives (SDGs) for all nations to work
              indefatigably to attain them for their countries.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-purple-800 flex">
        <div className="w-1/2 pl-40 pt-32 pb-5">
          <h3 className="text-5xl text-white font-bold uppercase">
            Responsibility
          </h3>
          <div className="mt-16 bg-gray-900 mr-16 p-6">
            <h4 className="text-white text-2xl font-bold">
              Coorperate Responsibility
            </h4>
            <p className="text-gray-300 mt-6 text-lg">
              Providing a cleaner environment through effective garbage
              collection which in turn boosts health benefits and create room
              for more opportunities.
            </p>
          </div>
        </div>
        <div className="w-1/2 pl-16 pt-32 pb-5 bg-purple-900">
          <h3 className="text-5xl text-white font-bold uppercase">Safety</h3>
          <div className="mt-16 bg-gray-900 mr-16 p-6">
            <h4 className="text-white text-2xl font-bold">
              Safety is our First Priority
            </h4>
            <p className="text-gray-300 mt-6 text-lg">
              Eradicating the method of burning and improper disposal of solid
              waste should be disallowed.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
