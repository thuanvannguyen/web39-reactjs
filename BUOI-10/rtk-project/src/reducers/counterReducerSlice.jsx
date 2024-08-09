import { createSlice } from "@reduxjs/toolkit";

const counterReducerSlice = createSlice({
  name: "counter123",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state, action) => {
      // Return khong nhan
      state.value += +action.payload;
    },

    decrement: (state, action) => {
      state.value -= +action.payload
    }
  },
});

export const { increment, decrement } = counterReducerSlice.actions;
export default counterReducerSlice.reducer;
