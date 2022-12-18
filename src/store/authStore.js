import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import axios from "axios";
import jwtDecode from "jwt-decode";

// if user is logged in persist is set to true and when page reloads
// we send our token to the backend and check if the users token is still usable
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

// authenticated user informations
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
      set((state) => {
        let logUser;
        if (token) {
          const decoded = jwtDecode(token);

          const { _id, username, email, role } = decoded.UserInfo;

          logUser = {
            _id: _id,
            username: username,
            email: email,
            role: role,
            authenticated: true,
          };
        }
        return {
          ...state,
          user: logUser ? logUser : state.user,
          token: token,
        };
      }),
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
