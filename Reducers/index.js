import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import sessionReducer from './sessionReducer';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import profileReducer from './profileReducer';


const rootReducer = combineReducers( {
    theme: themeReducer,
    session: sessionReducer,
    login: loginReducer,
    register: registrationReducer,
    profile: profileReducer,
})

export default rootReducer;