import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const axiosApi = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

axiosApi.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${useAuthStore.getState().token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await axios.get(
        "http://localhost:5000/api/auth/refresh",
        {
          withCredentials: true,
        }
      );

      const access_token = response.data.accessToken;

      useAuthStore.getState().setCredentials(access_token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return axiosApi(originalRequest);
    }

    return Promise.reject(error);
  }
);
