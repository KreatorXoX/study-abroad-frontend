import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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

const countryApi = axios.create({
  baseURL: "http://localhost:5000/api/countries",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${useAuthStore.getState().user.token}`,
  },
});

// get all countries
const getCountries = async () => {
  const result = await countryApi.get(`/`);
  return result.data;
};
export const useCountries = () => {
  return useQuery({
    queryKey: [`all-countries`],
    queryFn: async ({ signal }) => getCountries({ signal }),
    initialData: [],
    refetchOnWindowFocus: false,
  });
};

// get country by id
const getCountryById = async (id) => {
  const result = await countryApi.get(`/${id}`);
  return result.data;
};
export const useCountryById = (id) => {
  return useQuery({
    queryKey: [`country-${id}`],
    queryFn: getCountryById.bind(null, id),
    initialData: {},
    refetchOnWindowFocus: false,
  });
};
