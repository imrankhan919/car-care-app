import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../features/complaints/complaintSlice";
import CarLoadingScreen from "../components/CarLoadingScreen";

const AllComplaints = () => {
  const { isLoading, isError, message, allComplaints } = useSelector(
    (state) => state.complaint
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComplaints());

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <CarLoadingScreen />;
  }

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
                {allComplaints.map((complaint) => {
                  return (
                    <tr
                      key={complaint._id}
                      className="border-b border-gray-100"
                    >
                      <td className="py-4 px-4 text-gray-700">1</td>
                      <td className="py-4 px-4 text-gray-700">
                        {complaint.createdAt}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {complaint.car}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {complaint.registration}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                          {complaint.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          to={`/car/complaint/${complaint._id}`}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllComplaints;
