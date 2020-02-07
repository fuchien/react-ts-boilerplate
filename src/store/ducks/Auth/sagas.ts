import { put, all, takeLatest } from 'redux-saga/effects';
// import api from '../../../services/api';

import { signInFailure } from './actions';
import { AuthTypes } from './types';

export function* signInRequest() {
  try {
    // const response = yield call(api.get, 'users/diego3g/repos');
    // yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest)]);
