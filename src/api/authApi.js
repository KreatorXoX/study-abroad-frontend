import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosApi as authApi } from "./axios";
import { toast } from "react-toastify";
import { useAuthStore, usePersistentStore } from "../store/authStore";

const toastSuccessOpt = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: { backgroundColor: "#08313A" },
};
const toastErrorOpt = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: { backgroundColor: "#4d0000" },
};

// register user
const registerUser = async (newUser) => {
  const result = await authApi.post("/auth/register", {
    ...newUser,
  });
  return result.data;
};

export const useRegister = (newUser) => {
  return useMutation({
    mutationFn: (newUser) => registerUser(newUser),
    onSuccess: (response) => {
      toast.success("Registration is Succesful", toastSuccessOpt);
    },
    onError: (err, newUser, context) => {
      let errMsg;
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errMsg = err.response.data.message;
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        errMsg = err.request.message;
      } else {
        // Something happened in setting up the request that triggered an Error
        errMsg = err.message;
      }
      toast.error(errMsg, toastErrorOpt);
    },
  });
};
// login user
const loginUser = async (credentials) => {
  const result = await authApi.post("/auth/login", {
    ...credentials,
  });
  return result.data;
};

export const useLogin = (credentials) => {
  return useMutation({
    mutationFn: (credentials) => loginUser(credentials),
    onSuccess: (response) => {
      toast.success("Login is Succesful", toastSuccessOpt);
      useAuthStore.getState().setCredentials(response.accessToken);
      usePersistentStore.getState().setPersist(true);
    },
    onError: (err, newUser, context) => {
      let errMsg;
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errMsg = err.response.data.message;
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        errMsg = err.request.message;
      } else {
        // Something happened in setting up the request that triggered an Error
        errMsg = err.message;
      }
      toast.error(errMsg, toastErrorOpt);
    },
  });
};

// logout user
const logoutUser = async () => {
  const result = await authApi.post("/auth/logout");
  return result.data;
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: (response) => {
      toast.success("Logged Out", toastSuccessOpt);
      useAuthStore.getState().setLogout();
      queryClient.removeQueries();
    },
    onError: (err, newUser, context) => {
      let errMsg;
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errMsg = err.response.data.message;
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        errMsg = err.request.message;
      } else {
        // Something happened in setting up the request that triggered an Error
        errMsg = err.message;
      }
      toast.error(errMsg, toastErrorOpt);
    },
  });
};

// get refresh token id
const getRefreshToken = async () => {
  const result = await authApi.get(`/auth/refresh`);

  return result.data;
};
export const useRefreshToken = () => {
  return useQuery({
    queryKey: ["refresh"],
    queryFn: () => getRefreshToken(),
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
  });
};
