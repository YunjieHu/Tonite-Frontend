import { takeEvery, takeLatest, call , put} from 'redux-saga/effects'
import { THEME } from '../Constants';
import { fetchTheme ,toggleTheme, saveThemeToLocalStorage} from '../SagaFunctions';
import { setThemeError, setTheme  } from '../Actions';

//worker saga
export function* handleThemeLoad(){
    try{
        const theme = yield call(fetchTheme);
        yield put (setTheme(theme));
    }
    catch(error){
        //dispatch error
        yield put (setThemeError(error.toString()));
    }
}

export function* toggleThemeRequest(){
    try{
        const theme = yield call(fetchTheme);
        const newTheme = yield call(toggleTheme, theme);
        yield call (saveThemeToLocalStorage, newTheme);
        yield put (setTheme(newTheme));
    }
    catch(error){
        //dispatch error
        yield put (setThemeError(error.toString()));
    }
}



//watcher saga
export default function* watchThemeLoad(){
    //load the theme first
    yield takeEvery(THEME.LOAD, handleThemeLoad);
    //then activate the request to toggle theme using a button
    yield takeLatest(THEME.TOGGLE, toggleThemeRequest);
}
