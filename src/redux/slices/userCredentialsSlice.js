import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: ""
};

export const userSlice = createSlice({
  name: "userCredentials",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      const {email, password} = action.payload;
      state.email = email;
      state.password = password;
    },
  },
});

export const { setUserCredentials } = userSlice.actions;

export default userSlice.reducer;