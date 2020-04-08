import { SESSION } from '../Constants';

const sessionreducer = (state='', action) => {
    switch(action.type) {
        case SESSION.LOAD_SUCCESS:
            return action.session;
        case SESSION.LOAD_FAIL:
            return action.error;
        default:
            return state;
    }

}

export default sessionreducer;