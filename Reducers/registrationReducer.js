import { SIGNUP } from '../Constants'

const registrationReducer = (state=[], action) => {
    const response = action.response;
    switch(action.type) {
        case SIGNUP.REGISTER_SUCCESS:
            return { ...state, response };
        case SIGNUP.REGISTER_FAIL:
            return { ...state, response };
        default:
            return state;
    }
}

export default registrationReducer;