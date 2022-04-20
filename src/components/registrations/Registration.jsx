import React from "react";

const Registration = ({ registration }) => {
  return (
    <tr className="bg-white hover:bg-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <span className="text-sm font-medium text-gray-900 cursor-pointer">
              {registration.businessName}
            </span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{registration.address}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">
          {registration.typeOfSolidWaste}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {registration.garbageCollectionSchedule}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{registration.email}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        +232{registration.mobilePhone}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 text-gray-500">
          {registration.paymentMethod}
        </span>
      </td>
      <td></td>
    </tr>
  );
};

export default Registration;
