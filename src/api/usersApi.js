import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

export const getUsers = async () => {
  const response = await usersApi.get("/");
  return response.data;
};
export const getUsersByRole = async ({ queryKey }) => {
  const [_, role] = queryKey;
  const response = await usersApi.get("/");
  return response.data.filter((user) => user.role === role);
};
