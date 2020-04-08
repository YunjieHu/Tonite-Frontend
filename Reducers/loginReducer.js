import { AUTH } from '../Constants'

const loginReducer = (state=[], action) => {
    const response = action.response;
    switch(action.type) {
        case AUTH.LOGIN_SUCCESS:
            return { ...state, response };
        case AUTH.LOGIN_FAIL:
            return { ...state, response };
        default:
            return state;
    }
}

export default loginReducer;