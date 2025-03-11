import React from "react";

const AllComplaints = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            My Service Requests
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    S.No
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Date
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Vehicle
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Registration
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">1</td>
                  <td className="py-4 px-4 text-gray-700">2024-02-15</td>
                  <td className="py-4 px-4 text-gray-700">Toyota Camry</td>
                  <td className="py-4 px-4 text-gray-700">ABC-123</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-blue-500 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">2</td>
                  <td className="py-4 px-4 text-gray-700">2024-02-10</td>
                  <td className="py-4 px-4 text-gray-700">Honda Civic</td>
                  <td className="py-4 px-4 text-gray-700">XYZ-789</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Closed
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-blue-500 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">3</td>
                  <td className="py-4 px-4 text-gray-700">2024-02-05</td>
                  <td className="py-4 px-4 text-gray-700">BMW 3 Series</td>
                  <td className="py-4 px-4 text-gray-700">DEF-456</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                      Open
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-blue-500 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllComplaints;
