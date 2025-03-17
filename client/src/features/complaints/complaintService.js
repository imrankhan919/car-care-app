import axios from "axios";

const fetchComplaints = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/car", options);
  return response.data;
};

const fetchComplaint = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/car/${id}`, options);
  return response.data;
};

const updateComplaint = async (id, token) => {
  console.log(id);
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `/api/car/${id}`,
    { status: "close" },
    options
  );
  console.log(response.data);
  return response.data;
};

const complaintService = { fetchComplaints, fetchComplaint, updateComplaint };

export default complaintService;
