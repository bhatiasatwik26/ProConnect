import { createSlice } from "@reduxjs/toolkit";

const Signup_slice = createSlice({
  name: "Signup",
  initialState: {
    users: [],
  },
  reducers: {
    signUpUser: (state, action) => {
      state.users.push(action.payload); // Add a new user to the list
    },
  },
});

export const {signUpUser} = Signup_slice.actions;

export default Signup_slice.reducer;
