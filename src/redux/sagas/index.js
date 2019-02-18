import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import typeSaga from './typeSaga';
import addNew from './addNew';
import hikingSaga from './hikingSaga';
import dualSportSaga from './dualSportSaga';
import roadSaga from './roadSaga';
import photographySaga from './photographySaga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    typeSaga(),
    addNew(),
    hikingSaga(),
    dualSportSaga(),
    roadSaga(),
    photographySaga(),
  ]);
}
