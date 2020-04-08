import { takeLatest, put, call } from 'redux-saga/effects';
import { SIGNUP } from '../Constants';
import { registrationFail , setRegistrationResponse } from '../Actions';
import { register } from '../SagaFunctions';


export function* handleRegisterRequest(user){
    try{
        const response = yield call(register, user);
        yield put(setRegistrationResponse(response));
    }
    catch(error){
        yield put(registrationFail(error));
    }
}

export default function* watchUserRegistration(){
    yield takeLatest(SIGNUP.REGISTER, handleRegisterRequest);
}