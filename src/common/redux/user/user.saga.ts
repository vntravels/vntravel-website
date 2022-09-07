import { call, put } from 'redux-saga/effects';

import { getMe } from './user.services';
import { setUserProfile } from './user.slice';

import { setAlertState } from '@/common/redux/common/common.slice';
import { setIsLogin } from '@/common/redux/auth/auth.slice';

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
