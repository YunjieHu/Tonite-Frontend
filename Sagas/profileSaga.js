import { takeEvery, put, call } from 'redux-saga/effects';
import { PROFILE } from '../Constants';
import {profileActionSuccess, profileActionError} from '../Actions'
import { getUser } from '../SagaFunctions'

export function* fetchProfileRequest(user){
    try{
        const response = yield call(getUser, user);
        yield put(profileActionSuccess(response));
    }
    catch(error){
        yield put(profileActionError(error));
    }
}
export default function* watchProfile(){
    yield takeEvery(PROFILE.ACCESS, fetchProfileRequest);
}