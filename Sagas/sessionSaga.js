import { takeEvery, put, call } from 'redux-saga/effects';
import { SESSION } from '../Constants';
import { setSessionError, setSession } from '../Actions';
import { fetchSession } from '../SagaFunctions';

export function* handleSessionRequest(){
    try{
        const session = yield call(fetchSession);
        yield put (setSession(session));
    }
    catch(error){
        //dispatch error
        yield put (setSessionError(error.toString()));
    }
}

export default function* watchSessionRequest(){
    yield takeEvery(SESSION.LOAD, handleSessionRequest); 
}