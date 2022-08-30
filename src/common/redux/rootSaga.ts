import { signinSaga, signupSaga } from './auth/auth.saga';
import { all, takeEvery } from 'redux-saga/effects';
import { setSigninData, setSignupData } from './auth/auth.slice';

export default function* rootSaga() {
  yield all([
    takeEvery(setSigninData.type, signinSaga),
    takeEvery(setSignupData.type, signupSaga),
  ]);
}
