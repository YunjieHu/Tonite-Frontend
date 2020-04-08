import { takeLatest, put, call } from 'redux-saga/effects';
import { AUTH } from '../Constants';
import {activateSession , loginFail } from '../Actions';
import {saveSessionToLocalStorage, getAuth } from '../SagaFunctions';



export function* handleAuthRequest(user){
    try{
        const response = yield call(getAuth, user);
        if (response.status === 'success'){
            saveSessionToLocalStorage(response.user);
        }
        yield put(activateSession(response));
    }
    catch(error){
        yield put(loginFail(error));
    }
}

export default function* watchUserAuthentication(){
    yield takeLatest(AUTH.LOGIN, handleAuthRequest);
}