import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      const { message, variant = 'info', duration = 3000 } = action.payload;
      const id = Date.now();
      state.alerts.push({ id, message, variant, show: true, duration });
    },
    hideAlert: (state, action) => {
      const id = action.payload;
      const alert = state.alerts.find(alert => alert.id === id);
      if (alert) alert.show = false;
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    }
  },
});

export const { showAlert, hideAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
