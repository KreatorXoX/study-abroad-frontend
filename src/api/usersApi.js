import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

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

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

// get users by their role
const getUsersByRole = async (role) => {
  const result = await usersApi.get(`/role/${role}`);
  return result.data;
};
export const useUsersByRole = (role) => {
  return useQuery({
    queryKey: [`users-${role}`],
    queryFn: async ({ signal }) => getUsersByRole(role, { signal }),
    initialData: [],
  });
};

// get user by id
const getUserById = async (id) => {
  const result = await usersApi.get(`/${id}`);
  return result.data;
};
export const useUserById = (id) => {
  return useQuery({
    queryKey: [`userID-${id}`],
    queryFn: getUserById.bind(null, id),
    initialData: {},
  });
};

// post user and optimistic update
const addEmployee = async (newUser) => {
  const result = await usersApi.post("/", {
    ...newUser,
  });
  return result.data;
};
export const useAddEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newUser) => addEmployee(newUser),
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ["users-employee"] });

      const previousEmployeelist = queryClient.getQueryData(["users-employee"]);

      queryClient.setQueryData(["users-employee"], (old) => {
        if (old) {
          return [...old, newUser];
        }
        return [newUser];
      });

      return { previousEmployeelist };
    },
    onSuccess: (response) => {
      toast.success(response.message, toastSuccessOpt);
    },
    onError: (err, newUser, context) => {
      queryClient.setQueryData(
        ["users-employee"],
        context.previousEmployeelist
      );
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
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users-employee"] });
    },
  });
};

// PATCH USER
const updateEmployee = async (updatedUser) => {
  const result = await usersApi.patch("/", {
    ...updatedUser,
  });
  return result.data;
};
export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => updateEmployee(user),
    onMutate: async (user) => {
      await queryClient.cancelQueries({ queryKey: ["users-employee"] });
      const previousUserslist = queryClient.getQueryData(["users-employee"]);
      queryClient.setQueryData(["users-employee"], (old) => {
        if (old) {
          return [...old, user];
        } else {
          return [user];
        }
      });
      return { previousUserslist };
    },
    onSuccess: ({ message }) => {
      toast.success(message, toastSuccessOpt);
    },
    onError: (err, user, context) => {
      queryClient.setQueryData(["users-employee"], context.previousUserslist);
      toast.error(err.message, toastErrorOpt);
    },
    onSettled: ({ id }) => {
      console.log(id);
      queryClient.invalidateQueries({
        queryKey: ["users-employee"],
      });
      queryClient.invalidateQueries({
        queryKey: [`userID-${id}`],
      });
    },
  });
};

// DELETE USER
const deleteEmployee = async (id) => {
  console.log(id);
  const result = await usersApi.delete("/", { data: { id: id } });
  return result.data;
};
export const useRemoveEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteEmployee(id),
    onError: (err) => {
      toast.error(err.message, toastErrorOpt);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users-employee"] });
    },
  });
};
