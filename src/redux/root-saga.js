import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { bagSagas } from './bag/bag.sagas';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(bagSagas)])
};