import { THEME, SESSION, AUTH, SIGNUP, PROFILE } from '../Constants';


/******************** THEME ***************************/

export const loadTheme = () => ({
    type:THEME.LOAD
});

export const setTheme = theme => ({
    type:THEME.LOAD_SUCCESS,
    theme
})

export const toggleTheme = () =>({
    type:THEME.TOGGLE
})

export const setThemeError = error => ({
    type:THEME.LOAD_FAIL,
    error
})

/******************** SESSION ***************************/
export const loadSession = () => ({
    type: SESSION.LOAD
})

export const setSession = session => ({
    type: SESSION.LOAD_SUCCESS,
    session
})

export const setSessionError = error => ({
    type:SESSION.LOAD_FAIL,
    error
})

/******************** LOGIN ***************************/
export const loginAction = user => ({
    type: AUTH.LOGIN,
    user
})

export const activateSession = (response) => ({
    type: AUTH.LOGIN_SUCCESS,
    response
})

export const loginFail = error => ({
    type:AUTH.LOGIN_FAIL,
    error
})

/******************** REGISTRATION ***************************/
export const signUpAction = user => ({
    type: SIGNUP.REGISTER,
    user
})

export const setRegistrationResponse = (response) => ({
    type: SIGNUP.REGISTER_SUCCESS,
    response
})

export const registrationFail = error => ({
    type:SIGNUP.REGISTER_FAIL,
    error
})

/******************** PROFILE ***************************/
export const profileAction = user => ({
    type: PROFILE.ACCESS,
    user
})

export const profileActionSuccess = response => ({
    type: PROFILE.ACCESS_SUCCESS,
    response
})

export const profileActionError = response => ({
    type: PROFILE.ACCESS_FAIL,
    response
})
