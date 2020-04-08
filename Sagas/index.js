import { all } from 'redux-saga/effects';
import themeSaga from './themeSaga';
import sessionSaga from './sessionSaga';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import profileSaga from './profileSaga';

function* rootSaga(){
    yield all([
        themeSaga(),
        sessionSaga(),
        loginSaga(),
        registrationSaga(),
        profileSaga(),
    ]);
}


export default rootSaga;