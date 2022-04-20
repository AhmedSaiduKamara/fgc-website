import React from "react";
import Navbar from "../components/Navbar";
import { FiMapPin, FiTwitter } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="py-24 newsletter-hero h-72 flex items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-5xl">Let's Tallk</h1>
        </div>
      </section>
      <section className="pt-16 pb-32">
        <div className="container mx-auto flex">
          <div className="box-shadow w-2/5 py-16 mt-16 px-10 rounded-md">
            <h4 className="text-purple-500 font-bold underline text-2xl">
              Services
            </h4>
            <h2 className="text-4xl font-bold mt-5">Send your Message</h2>
            <form
              className="mt-5"
              action="https://formspree.io/f/moqrkzel"
              method="POST"
            >
              <label className="block mb-6">
                <input
                  type="text"
                  placeholder="Your name *"
                  className="py-3 px-4 border focus:outline-purple-500 w-full rounded"
                  name="name"
                />
              </label>
              <label className="block mb-6">
                <input
                  type="email"
                  placeholder="Email *"
                  className="py-3 px-4 border focus:outline-purple-500 w-full rounded"
                  name="email"
                />
              </label>
              <label className="block mb-6">
                <input
                  type="tel"
                  maxLength="12"
                  placeholder="Phone"
                  className="py-3 px-4 border focus:outline-purple-500 w-full rounded"
                  name="phone"
                />
              </label>
              <label className="block mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="py-3 px-4 border focus:outline-purple-500 w-full rounded"
                  name="subject"
                />
              </label>
              <label className="block mb-6">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="py-3 px-4 border focus:outline-purple-500 w-full rounded"
                  name="message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="py-4 w-full bg-purple-500 text-white rounded-md text-xl hover:bg-purple-800"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-3/5 pt-32 px-16">
            <h4 className="text-purple-500 font-bold underline text-2xl">
              Quick contact
            </h4>
            <h2 className="text-5xl font-bold mt-10">Need Help? Contact Us</h2>
            <h4 className="text-purple-500 font-bold underline text-xl mt-4">
              EMMERGENCY WASTE PICKUP
            </h4>
            <p className="my-8 text-4xl font-bold">+232 79 316 767</p>
            <div className="flex">
              <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                <FiMapPin className="text-4xl hover:text-purple-500" />
              </div>
              <div className="ml-4">
                <h5 className="text-2xl">Address</h5>
                <p>29 Johnson Street, Aberdeen</p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                <BsFillTelephoneFill className="text-4xl hover:text-purple-500" />
              </div>
              <div className="ml-4">
                <h5 className="text-2xl">Phone</h5>
                <p>+232 99 821 590</p>
                <p>+232 31 110 158</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                <BsClockFill className="text-4xl hover:text-purple-500" />
              </div>
              <div className="ml-4">
                <h5 className="text-2xl">Office Hours:</h5>
                <p>Mon - Sat: 9: 00am to 8:00pm (Sun: Closed)</p>
              </div>
            </div>
            <ul className="flex mt-8">
              <li className="mr-5">
                <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                  <FaFacebookF className="text-4xl hover:text-purple-500" />
                </div>
              </li>
              <li className="mr-5">
                <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                  <FiTwitter className="text-4xl hover:text-purple-500" />
                </div>
              </li>
              <li>
                <div className="p-4 border rounded-tl-xl rounded-br-xl shadow-md">
                  <FaLinkedinIn className="text-4xl hover:text-purple-500" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
