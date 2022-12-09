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

const countryApi = axios.create({
  baseURL: "http://localhost:5000/api/countries",
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
    //select:(countries)=>{countries.map(country=>{})}
  });
};

// get university by id
const getCountryById = async (id) => {
  const result = await countryApi.get(`/${id}`);
  return result.data;
};
export const useCountryById = (id) => {
  return useQuery({
    queryKey: [`university-${id}`],
    queryFn: getCountryById.bind(null, id),
    initialData: {},
  });
};
