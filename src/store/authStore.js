import create from "zustand";
import axios from "axios";
import { persist, devtools } from "zustand/middleware";

// export const useAuthStore = create(
//   persist(
//     (set) => ({
//       user: {
//         token: null,
//         _id: null,
//         username: null,
//         email: null,
//         role: null,
//         authenticated: false,
//       },
//       setCredentials: (token) =>
//         set((state) => ({
//           ...state,
//           user: { ...state.user, authenticated: true, token },
//         })),
//       setLogout: () =>
//         set((state) => ({
//           ...state,
//           user: {
//             token: null,
//             _id: null,
//             username: null,
//             email: null,
//             role: null,
//             authenticated: false,
//           },
//         })),
//     }),
//     {
//       name: "authStorage",
//       getStorage: () => sessionStorage,
//     }
//   )
// );

export const useAuthStore = create(
  devtools((set) => ({
    user: {
      token: null,
      _id: null,
      username: null,
      email: null,
      role: null,
      authenticated: false,
    },
    setCredentials: (token) =>
      set((state) => ({
        ...state,
        user: { ...state.user, authenticated: true, token },
      })),
    setLogout: () =>
      set((state) => ({
        ...state,
        user: {
          token: null,
          _id: null,
          username: null,
          email: null,
          role: null,
          authenticated: false,
        },
      })),
  }))
);

axios
  .get("http://localhost:5000/api/auth/refresh", {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  })
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    if (data.accessToken) {
      useAuthStore.getState().setCredentials(data.accessToken);
    }
  })
  .catch((err) => {
    useAuthStore.getState().setLogout();
  });
