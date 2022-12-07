import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

let err = false;
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      err = true;
      let errMsg;
      if (error.response.data) {
        errMsg = `${error.response.data.message} ${error.response.status}`;
      } else if (error.request) {
        errMsg = "request error";
      } else errMsg = error ? error.message : "Unknown Error Occurred";
      toast(errMsg, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      enabled: !err,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
