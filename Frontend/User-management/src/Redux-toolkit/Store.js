/** @format */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { userData: [] },
  reducers: {
    login: (state, action) => {
      fetch("http://localhost:8000/api/v1/user/data/allUsers", {
        method: "POST",
        body: JSON.stringify({
          password: action.payload.adminPass,
          adminName: action.payload.adminName,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          state.userData = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    newRegister: (state, action) => {},
  },
});
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});
export const userActions = usersSlice.actions;
export default store;
