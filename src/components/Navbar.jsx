import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();

  const navigate = useNavigate();

  const { user } = useAuthContext();

  const handleSignout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-lg py-5 sticky top-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-purple-500 font-bold text-2xl tracking-wider"
        >
          FGC
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="mx-5 text-lg">
              <Link to="/" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li className="mx-5 text-lg">
              <Link to="/about" className="hover:text-purple-600">
                About
              </Link>
            </li>
            <li className="mx-5 text-lg">
              <Link to="/services" className="hover:text-purple-600">
                Services
              </Link>
            </li>
            <li className="mx-5 text-lg">
              <Link to="/faqs" className="hover:text-purple-600">
                FAQs
              </Link>
            </li>
            <li className="mx-5 text-lg">
              <Link to="/contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
            {user && (
              <>
                <li className="mx-5 text-lg">
                  <Link to="/requests" className="hover:text-purple-600">
                    Requests
                  </Link>
                </li>
                <li className="mx-5 text-lg">
                  <Link to="/registrations" className="hover:text-purple-600">
                    Registrations
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center">
            {!user && (
              <>
                <li>
                  <Link
                    to="/registration"
                    className="border bg-purple-600 py-3 px-6 rounded-md text-white hover:bg-purple-800 text-lg"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/request"
                    className="border border-purple-600 text-purple-600 py-3 px-6 rounded-md hover:bg-purple-800 text-lg ml-5 hover:text-white"
                  >
                    Make Request
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <button
                  onClick={handleSignout}
                  className="border border-purple-600 text-purple-600 py-3 px-6 rounded-md hover:bg-purple-800 text-lg ml-5 hover:text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
