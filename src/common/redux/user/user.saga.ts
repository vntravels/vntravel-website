import { call, put } from 'redux-saga/effects';
import { setAlertState } from '../alert/alert.slice';
import { setIsLogin } from '../auth/auth.slice';
import { getMe } from './user.services';
import { setUserProfile } from './user.slice';

export function* getMeSaga(): any {
  try {
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
