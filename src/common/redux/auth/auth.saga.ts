import { call, put } from 'redux-saga/effects';
import { signin, signup } from './auth.services';
import { setIsLogin, setSignupResponse } from './auth.slice';

export function* signinSaga(action: any): any {
  try {
    yield call(signin, action.payload);
    yield put(setIsLogin(true));
  } catch (error) {
    console.log('error');
    yield put(setIsLogin(false));
  }
}

export function* signupSaga(action: any): any {
  try {
    const data = yield call(signup, action.payload);
    yield put(setSignupResponse(data));
  } catch (error) {
    console.log('Signup fail error');
  }
}
