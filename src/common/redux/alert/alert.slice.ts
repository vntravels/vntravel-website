import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type AlertState = {
  alertState: {
    open: boolean;
    message: string;
    severity: AlertColor;
    color?: string;
  };
};

const initialState: AlertState = {
  alertState: {
    open: false,
    message: '',
    severity: 'success',
  },
};

export const authSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertState(state, action) {
      state.alertState = action.payload;
    },
  },
});

export const { setAlertState } = authSlice.actions;

export const selectAlertState = (state: RootState) => state.alert.alertState;

export default authSlice.reducer;
