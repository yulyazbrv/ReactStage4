import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setUserPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setUserPassword } = passwordSlice.actions;

export default passwordSlice.reducer;