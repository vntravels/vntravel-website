import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type AlertState = {
  alertState: {
    open: boolean;
    message: string;
    severity: AlertColor;
    color?: string;
  };

  error: {
    message: string;
    code?: number;
  };
};

const initialState: AlertState = {
  alertState: {
    open: false,
    message: '',
    severity: 'success',
  },

  error: {
    message: '',
  },
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertState(state, action) {
      state.alertState = action.payload;
    },

    setErrorMessage(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setAlertState, setErrorMessage } = alertSlice.actions;

export const selectAlertState = (state: RootState) => state.alert.alertState;

export const selectErrorMessage = (state: RootState) => state.alert.error;

export default alertSlice.reducer;
