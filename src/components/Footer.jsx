import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

     <section className="py-32 newsletter-hero">
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center w-1/2">
            <h2 className="text-white text-5xl font-bold leading-tight mb-10">
              Safeguarding our environment ensures we have a safe, clean and
              healthy Future
            </h2>
            <Link
              to="/request"
              className="bg-purple-600 py-5 px-10 text-xl text-white hover:bg-purple-800 rounded-md"
            >
              Make request
            </Link>
          </div>
        </div>
      </section>

    <section className="py-24 bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-5 text-white">About FGC</h3>
          <p className="pr-16 text-gray-200">
            Fast Garbage Collection (FGC) is of paramount importance and waste
            management in general plays a crucial role in the economic and
            social development of a country.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-5 text-center text-white">Useful Links</h3>
          <ul className="text-center">
            <li className="mb-3 text-gray-200">
              <Link to="/about" className="hover:text-purple-600">
                About
              </Link>
            </li>
            <li className="mb-3 text-gray-200">
              <Link to="/services" className="hover:text-purple-600">
                Services
              </Link>
            </li>
            <li className="mb-3 text-gray-200">
              <Link to="/faqs" className="hover:text-purple-600">
                FAQs
              </Link>
            </li>
            <li className="mb-3 text-gray-200">
              <Link to="/contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-5 text-white">Connect with US</h3>
          <p className="text-gray-200">
            Fast Garbage Collection (FGC) is of paramount importance and waste
            management in general plays a crucial role in the economic and
            social development of a country.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
