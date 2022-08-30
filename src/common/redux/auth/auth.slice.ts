import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type AuthState = {
  signinData: {
    email?: string;
    password?: string;
    access_token?: string;
  };
  signupData: {
    firstName?: string;
    lastName?: string;
    email: string;
    password?: string;
  };
  signupResponse: {
    firstName?: string;
    lastName?: string;
    email: string;
    password?: string;
  };
  isLogin?: boolean;
};

const initialState: AuthState = {
  signinData: {
    email: '',
    password: '',
  },
  isLogin: false,
  signupData: { email: '' },
  signupResponse: { email: '' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSigninData(state, action) {
      state.signinData = action.payload;
    },
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setSignupResponse(state, action) {
      state.signupResponse = action.payload;
    },
  },
});

export const { setSigninData, setIsLogin, setSignupData, setSignupResponse } =
  authSlice.actions;

export const selectSigninData = (state: RootState) => state.auth.signinData;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const selectSignupResponse = (state: RootState) =>
  state.auth.signupResponse;

export default authSlice.reducer;
