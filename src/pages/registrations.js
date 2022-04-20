import React from "react";
import Navbar from "../components/Navbar";
import RegistrationsList from "../components/registrations/RegistrationsList";

import { useCollection } from "../hooks/useCollection";

const Registrations = () => {
  const { documents: registrations } = useCollection("registrations");
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {registrations && <RegistrationsList registrations={registrations} />}
      </div>
    </div>
  );
};

export default Registrations;
