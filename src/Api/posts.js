import axios from "axios";

export const getPosts = async () => {
  const url = `/posts`;
  const { data } = await axios.get(url);
  return data;
};

export const getPostById = async (id) => {
  const url = `/posts/${id}`;
  const { data } = await axios.get(url);
  return data;
};
