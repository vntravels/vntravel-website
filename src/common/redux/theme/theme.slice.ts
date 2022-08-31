import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type ThemeState = {
  themeState: {
    isOpen: Array<any>;
    mode: 'light' | 'dark';
    opened: boolean;
  };
};

const initialState: ThemeState = {
  themeState: {
    isOpen: [], //for active default menu
    mode: 'light',
    opened: true,
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeState(state, action) {
      state.themeState = action.payload;
    },
  },
});

export const { setThemeState } = themeSlice.actions;

export const selectThemeState = (state: RootState) => state.theme.themeState;

export default themeSlice.reducer;
