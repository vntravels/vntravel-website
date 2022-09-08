import { call, put } from 'redux-saga/effects';

import { logout, signin, signup } from './auth.services';
import { setIsLogin, setSignupResponse } from './auth.slice';

import {
  setAlertState,
  setErrorMessage,
} from '@/common/redux/common/common.slice';
import { getMe } from '@/common/redux/user/user.services';
import { setUserProfile } from '@/common/redux/user/user.slice';

export function* signinSaga(action: any): any {
  try {
    yield call(signin, action.payload);
    const data = yield call(getMe);
    yield put(setUserProfile(data));
    yield put(setIsLogin(true));
  } catch (error: any) {
    yield put(setIsLogin(false));
    yield put(setErrorMessage({ message: error.message }));
    yield put(
      setAlertState({
        open: true,
        message: error.message,
        severity: 'error',
      }),
    );
  }
}

export function* signupSaga(action: any): any {
  try {
    const data = yield call(signup, action.payload);
    yield put(setSignupResponse(data));
  } catch (error: any) {
    yield put(setErrorMessage({ message: error.message }));
    yield put(
      setAlertState({
        open: true,
        message: error.message,
        severity: 'error',
      }),
    );
  }
}

export function* logoutSaga(): any {
  try {
    yield call(logout);
    yield put(setIsLogin(false));
  } catch (error: any) {
    yield put(
      setAlertState({
        open: true,
        message: error.message,
        severity: 'error',
      }),
    );
  }
}
