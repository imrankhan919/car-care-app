import axios from "axios";

const fetchComments = async (id, token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`/api/car/${id}/comment`, options);
  return response.data;
};

const createComment = async (formData, token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/car/${formData.id}/comment`,
    formData,
    options
  );
  return response.data;
};

const commentService = {
  fetchComments,
  createComment,
};

export default commentService;
