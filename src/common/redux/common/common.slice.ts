import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// declaring the types for our state
export type CommonState = {
  alertState: {
    open: boolean;
    message: string;
    severity: AlertColor;
    color?: string;
  };

  errorState: {
    message: string;
    code?: number;
  };

  themeState: {
    isOpen: Array<any>;
    mode: 'light' | 'dark';
    opened: boolean;
  };

  currencyState: {
    currency: string;
    flag: string;
  };

  openSidebar: boolean;
};

const initialState: CommonState = {
  alertState: {
    open: false,
    message: '',
    severity: 'success',
  },
  errorState: {
    message: '',
  },
  themeState: {
    isOpen: [], //for active default menu
    mode: 'light',
    opened: true,
  },
  currencyState: {
    currency: 'VND',
    flag: '/icons/iconVN.svg',
  },
  openSidebar: false,
};

export const alertSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setAlertState(state, action) {
      state.alertState = action.payload;
    },

    setErrorMessage(state, action) {
      state.errorState = action.payload;
    },

    setThemeState(state, action) {
      state.themeState = action.payload;
    },

    setCurrencyState(state, action) {
      state.currencyState = action.payload;
    },

    setOpenSidebar(state, action) {
      state.openSidebar = action.payload;
    },
  },
});

export const {
  setAlertState,
  setErrorMessage,
  setThemeState,
  setCurrencyState,
  setOpenSidebar,
} = alertSlice.actions;

export const selectAlertState = (state: RootState) => state.common.alertState;

export const selectErrorMessage = (state: RootState) => state.common.errorState;

export const selectThemeState = (state: RootState) => state.common.themeState;

export const selectOpenSidebar = (state: RootState) => state.common.openSidebar;

export const selectCurrencyState = (state: RootState) =>
  state.common.currencyState;

export default alertSlice.reducer;
