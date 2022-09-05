import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type UserState = {
  userProfile: {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    avatarUrl: string;
  };
};

const initialState: UserState = {
  userProfile: {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    avatarUrl: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserProfile() {},
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile, getUserProfile } = userSlice.actions;

export const selectUserProfile = (state: RootState) => state.user.userProfile;

export default userSlice.reducer;
