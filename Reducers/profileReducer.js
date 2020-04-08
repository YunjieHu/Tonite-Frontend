import { PROFILE } from '../Constants'

const profileReducer = (state =[], action) =>{
    const response = action.response;
    switch(action.type) {
        case PROFILE.ACCESS:
            return {...state, loading:true}
        case PROFILE.ACCESS_SUCCESS:
            return { ...state,  response, loading:false };
        case PROFILE.ACCESS_FAIL:
            return { ...state, response, loading:false };
        default:
            return state;
    }
}
export default profileReducer;