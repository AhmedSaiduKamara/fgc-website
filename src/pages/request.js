/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";

import Navbar from "../components/Navbar";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [typeOfSolidWaste, setTypeOfSolidWaste] = useState("");
  const [quantityOfGabage, setQuantityOfGabage] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ref = collection(db, "requests");
    await addDoc(ref, {
      fullName,
      address,
      email,
      mobilePhone,
      pickupDate,
      typeOfSolidWaste,
      paymentMethod,
      quantityOfGabage,
    });
    navigate("/");
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mx-auto my-16 flex justify-center items-center">
        <div className="w-3/5">
          <form
            className="rounded-md bg-white border pb-8 mb-16 box-shadow"
            onSubmit={handleSubmit}
          >
            <div className="bg-purple-100 py-3 px-8 flex items-center">
              <h1 className="font-bold text-lg">Client Request Information</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-8 mt-8">
              <div className="mr-5">
                <label htmlFor="fullName" className="block mb-1">
                  Fullname
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter fullname"
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mx-5">
                <label htmlFor="address" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-3 mt-3">
              <div className="mx-5">
                <label htmlFor="quantityOfGabage" className="block mb-1">
                  Quantity of Gabage
                </label>
                <input
                  type="text"
                  id="quantityOfGabage"
                  placeholder="Enter quantity of gabgage (eg. 2 bags of gabage)"
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  value={quantityOfGabage}
                  onChange={(e) => setQuantityOfGabage(e.target.value)}
                  required
                />
              </div>
              <div className="mx-5">
                <label htmlFor="garbageSchedule" className="block mb-1">
                  Type of solid waste
                </label>
                <select
                  id="garbageSchedule"
                  value={typeOfSolidWaste}
                  onChange={(e) => setTypeOfSolidWaste(e.target.value)}
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  required
                >
                  <option value="">Select type of solid waste</option>
                  <option value="Paper">Paper</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Glass">Glass</option>
                  <option value="Electronics">Electronics</option>
                  <option value="FoodWaste">Food Waste</option>
                  <option value="Construction">Construction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8 mt-3">
              <div className="mr-5">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="myemail@email.com"
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mx-5">
                <label htmlFor="mobilePhone" className="block mb-1">
                  Mobile Phone
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 py-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      +232
                    </span>
                    <input
                      type="tel"
                      id="mobilePhone"
                      autoComplete="phone"
                      placeholder="76000000"
                      maxLength="8"
                      className="flex-1 block w-full focus:ring-indigo-50 py-30 pl-2 border focus:outline-purple-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      value={mobilePhone}
                      onChange={(e) => setMobilePhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mx-5">
                <label htmlFor="paymentType" className="block mb-1">
                  Payment method
                </label>
                <select
                  id="paymentType"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="Cash">Cash</option>
                  <option value="Bank">Bank</option>
                  <option value="OrangeMoney">Orange Money</option>
                  <option value="AfriMoney">Afri Money</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8 mt-3">
              <div className="mr-5">
                <label htmlFor="pickupDate" className="block mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  className="border py-3 px-4 w-full rounded-md focus:outline-purple-500"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <hr className="mx-8 mt-4" />
            <div className="px-8 mt-4 flex justify-end">
              <button
                type="submit"
                className="py-3 px-10 bg-purple-600 text-white rounded-md text-lg"
              >
                Make request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
