import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { axiosApi as countryApi } from "./axios";
import axios from "axios";
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

// get all countries
const getCountries = async () => {
  const result = await countryApi.get(`/countries`);
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
  const result = await countryApi.get(`/countries/${id}`);
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

// post country and optimistic update
const addCountry = async (newCountry) => {
  // const res = await axios.post(
  //   "http://localhost:5000/api/countries",
  //   newCountry,
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${useAuthStore.getState().token}`,
  //     },
  //   }
  // );

  // return res.data;

  const result = await countryApi.post("/countries", newCountry, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
};
export const useAddCountry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCountry) => addCountry(newCountry),
    onMutate: async (newCountry) => {
      await queryClient.cancelQueries({ queryKey: ["all-countries"] });

      const previousCountrylist = queryClient.getQueryData(["all-countries"]);

      queryClient.setQueryData(["all-countries"], (old) => {
        if (old) {
          return [...old, newCountry];
        }
        return [newCountry];
      });

      return { previousCountrylist };
    },
    onSuccess: (response) => {
      toast.success(response.message, toastSuccessOpt);
    },
    onError: (err, newCountry, context) => {
      queryClient.setQueryData(["all-countries"], context.previousCountrylist);

      let errMsg;

      if (err.response) errMsg = err.response.data.message;
      else if (err.request) errMsg = err.request.message;
      else errMsg = err.message;

      toast.error(errMsg, toastErrorOpt);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["all-countries"] });
    },
  });
};
