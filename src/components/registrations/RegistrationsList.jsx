import React from "react";
import Registration from "./Registration";

const RegistrationsList = ({ registrations }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 mt-24">
        <thead className="bg-gray-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Business name
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
              Type of waste
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Collection Schedule
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
              Phone
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
          {registrations &&
            registrations.map((reg) => (
              <Registration key={reg.id} registration={reg} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationsList;
