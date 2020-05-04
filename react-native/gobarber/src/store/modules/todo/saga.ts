import { call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
// import { Types as LoginTypes } from '~/store/modules/login/actions';

export function* sendUsers() {
  try {
    yield call(api.get, '/users');

    // yield put({ type: UsersTypes.GET_SUCCESS, payload: data });
    // if (action.payload) {
    //   const { email } = action.payload;

    //   if (data.some(item => item.email.toLowerCase() === email.toLowerCase())) {
    //     const currentUser = data.find(item => item.email === email);

    //     yield put({ type: LoginTypes.SET_CURRENT_USER, payload: currentUser });
    //     history.push('/');
    //   } else {
    //     yield Toast('error', MESSAGE.notFoundUser);
    //   }
    // }
  } catch (err) {
    // yield Toast('error', MESSAGE.errorRequest);
    // yield put({ type: UsersTypes.GET_FAILURE });
  }
}

export default function* saga() {
  // yield takeLatest(UsersTypes.GET_REQUEST, sendUsers);
}
