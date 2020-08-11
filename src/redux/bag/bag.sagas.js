import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearBag } from './bag.actions';

export function* clearBagOnSignOut() {
    yield put(clearBag());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearBagOnSignOut)
}

export function* bagSagas() {
    yield(all([call(onSignOutSuccess)]))
}