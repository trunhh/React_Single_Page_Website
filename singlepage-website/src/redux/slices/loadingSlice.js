import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  message: '',
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true
      state.message = action.payload;
    },
    // Optional: resetLoading if needed
    resetLoading: (state) => {
      state.isLoading = false;
      state.message = '';
    },
  },
});

export const { setLoading, resetLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
