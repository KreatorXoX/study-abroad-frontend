import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosApi as universityApi } from "./axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";

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

// get all universities
const getUniversities = async () => {
  const result = await universityApi.get(`/universities`);
  return result.data;
};
export const useUniversities = () => {
  return useQuery({
    queryKey: [`all-universities`],
    queryFn: async ({ signal }) => getUniversities({ signal }),
    initialData: [],
  });
};

// get university by id
const getUniversityById = async (id) => {
  const result = await universityApi.get(`/universities/${id}`);
  return result.data;
};
export const useUniversityById = (id) => {
  return useQuery({
    queryKey: [`university-${id}`],
    queryFn: getUniversityById.bind(null, id),
    initialData: {},
    refetchOnWindowFocus: false,
  });
};
