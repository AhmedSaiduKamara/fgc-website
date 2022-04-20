import React from "react";

import Request from "./Request";

const RequestsList = ({ requests }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 mt-24">
        <thead className="bg-gray-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Address
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Gabage Type
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Phone number
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Pickup Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Payment Method
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {requests &&
            requests.map((req) => <Request key={req.id} request={req} />)}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsList;
