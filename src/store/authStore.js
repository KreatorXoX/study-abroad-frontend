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
export const usePersistentStore = create(
  persist(
    (set) => ({
      persist: false,
      setPersist: (bool) =>
        set((state) => ({
          persist: bool,
        })),
    }),
    {
      name: "persist",
      getStorage: () => sessionStorage,
    }
  )
);
export const useAuthStore = create(
  devtools((set) => ({
    user: {
      _id: null,
      username: null,
      email: null,
      role: null,
      authenticated: false,
    },
    token: null,
    setCredentials: (token) =>
      set((state) => ({
        ...state,
        user: { ...state.user, authenticated: true },
        token: token,
      })),
    setLogout: () =>
      set((state) => {
        usePersistentStore.getState().setPersist(false);
        return {
          ...state,
          token: null,
          user: {
            _id: null,
            username: null,
            email: null,
            role: null,
            authenticated: false,
          },
        };
      }),
  }))
);

const refresh = usePersistentStore.getState().persist;

if (refresh) {
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
}
