import React, { useEffect, useState } from "react";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import { BiMessageSquare } from "react-icons/bi";
import { IoMdAlert, IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  closeComplaint,
  getComplaint,
} from "../features/complaints/complaintSlice";
import CarLoadingScreen from "../components/CarLoadingScreen";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { addComment, getComments } from "../features/comments/commentSlice";

function SingleComplaint() {
  const [text, setText] = useState("");

  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message, singleComplaint } = useSelector(
    (state) => state.complaint
  );

  const { comments } = useSelector((state) => state.comment);

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleCloseComplaint = (id) => {
    dispatch(closeComplaint(id));
  };

  // Handle Add Comment
  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        id: id,
        text: text,
      })
    );

    setText("");
  };

  useEffect(() => {
    dispatch(getComplaint(id));
    dispatch(getComments(id));
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
          <h1 className="text-2xl font-semibold text-gray-800 uppercase">
            {singleComplaint?.car}
          </h1>
        </div>

        {/* Car Image */}
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src={singleComplaint?.carImage}
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
            <p className="text-lg font-semibold text-gray-800 uppercase">
              {singleComplaint.registration}
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
                  <span className="font-medium text-gray-800">{user.name}</span>
                  <span className="text-xs text-gray-500">
                    {comment.createdAt}
                  </span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="space-y-4">
            <div className="flex space-x-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
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
          <button
            onClick={() => handleCloseComplaint(singleComplaint._id)}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <FaCheckCircle className="w-5 h-5" />
            <span>Close Complaint</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleComplaint;
