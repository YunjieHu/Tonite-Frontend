import { THEME } from '../Constants';

const themeReducer = (state='', action) => {
    switch(action.type){
        case THEME.LOAD_SUCCESS:
            return action.theme;
        case THEME.LOAD_FAIL:
            return action.error;
        default:
            return state;
    }
}

export default themeReducer;