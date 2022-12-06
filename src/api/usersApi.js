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
    queryFn: () => getUsersByRole(role),
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
        console.log(old);
        return [...old, newUser];
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
      toast.error(`${err.response.data.message}`, toastErrorOpt);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users-employee"] });
    },
  });
};
