import React, { useState } from "react";
import Navbar from "../components/Navbar";

import { useSignUp } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { error, signup } = useSignUp();

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    signup(email, password);
    navigate('/')
  };

  return (
    <div>
      <Navbar />
      <section className="flex justify-center items-center h-screen">
        <div className="w-1/3 box-shadow p-8 rounded-md bg-white">
          <h1 className="text-purple-500 font-bold text-4xl">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <label className="block mt-10 mb-3">
              <span className="text-lg">Email</span>
              <input
                type="email"
                placeholder="Enter email"
                className="border block mt-1 mb-5 w-full py-3 px-4 rounded-md focus:outline-purple-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block mt-3 mb-3">
              <span className="text-lg">Password</span>
              <input
                type="password"
                placeholder="Enter password"
                className="border block mt-1 mb-5 w-full py-3 px-4 rounded-md focus:outline-purple-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <p className="my-1 text-red-400">{error}</p>}
            <button
              type="submit"
              className="py-3 px-6 bg-purple-600 text-white text-lg w-full rounded-md hover:bg-purple-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
