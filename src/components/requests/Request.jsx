import React from "react";

const Request = ({ request }) => {
  return (
    <tr className="bg-white hover:bg-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <span className="text-sm font-medium text-gray-900 cursor-pointer">
              {request.fullName}
            </span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{request.address}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">
          {request.typeOfSolidWaste}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {request.quantityOfGabage}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{request.mobilePhone}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {request.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {request.pickupDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex leading-5 text-gray-500">
          {request.paymentMethod}
        </span>
      </td>
      <td></td>
    </tr>
  );
};

export default Request;
