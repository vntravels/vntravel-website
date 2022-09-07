import { call, put } from 'redux-saga/effects';
import { setAlertState } from '../alert/alert.slice';
import { getMe } from '../user/user.services';
import { setUserProfile } from '../user/user.slice';
import { logout, signin, signup } from './auth.services';
import { setIsLogin, setSignupResponse } from './auth.slice';

export function* signinSaga(action: any): any {
  try {
    yield call(signin, action.payload);
    const data = yield call(getMe);
    yield put(setUserProfile(data));
    yield put(setIsLogin(true));
  } catch (error: any) {
    yield put(setIsLogin(false));
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
