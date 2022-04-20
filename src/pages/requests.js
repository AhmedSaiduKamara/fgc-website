import React from "react";
import Navbar from "../components/Navbar";
import RequestsList from "../components/requests/RequestsList";
import { useCollection } from "../hooks/useCollection";

const Requests = () => {
  const { documents: requests } = useCollection("requests");
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {requests && <RequestsList requests={requests} />}
      </div>
    </div>
  );
};

export default Requests;
