import React, { useEffect } from "react";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import { BiMessageSquare } from "react-icons/bi";
import { IoMdAlert, IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getComplaint } from "../features/complaints/complaintSlice";
import CarLoadingScreen from "../components/CarLoadingScreen";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function SingleComplaint() {
  const comments = [
    {
      author: "Service Advisor",
      message: "Initial inspection scheduled for tomorrow at 10 AM.",
      timestamp: "2024-03-15 09:30",
    },
    {
      author: "Customer",
      message: "Thank you, I will bring the car as scheduled.",
      timestamp: "2024-03-15 10:15",
    },
  ];

  const { isLoading, isError, message, singleComplaint } = useSelector(
    (state) => state.complaint
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getComplaint(id));
    if (isError && message) {
      toast.error(message);
    }
  }, [id, isError, message]);

  if (isLoading) {
    return <CarLoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full p-6 space-y-6">
        {/* Header with Car Icon */}
        <div className="flex items-center space-x-3">
          <FaCar className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-semibold text-gray-800">
            {singleComplaint.car.toUpperCase()}
          </h1>
        </div>

        {/* Car Image */}
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src={singleComplaint.carImage}
            alt="Tesla Model 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Car Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-500">
              Registration Number
            </h2>
            <p className="text-lg font-semibold text-gray-800">
              {singleComplaint.registration.toUpperCase()}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500">
              Issue Description
            </h2>
            <p className="text-gray-700">{singleComplaint.description}</p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center space-x-2">
            {singleComplaint.status === "pending" ? (
              <IoMdAlert className="w-5 h-5 text-yellow-500" />
            ) : (
              <FaCheckCircle className="w-5 h-5 text-green-500" />
            )}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                singleComplaint.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {singleComplaint.status === "pending" ? "Pending" : "Closed"}
            </span>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <BiMessageSquare className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-800">Comments</h2>
          </div>

          <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-gray-800">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-500">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-gray-700">{comment.message}</p>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <IoMdSend className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Close Complaint Button */}
        {singleComplaint.status === "pending" && (
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
            <FaCheckCircle className="w-5 h-5" />
            <span>Close Complaint</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleComplaint;
