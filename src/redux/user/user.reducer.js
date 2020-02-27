import UserActionTypes from './user.types';
import { setAdminUser, toggleAdmin } from './user.utils';

const INITIAL_STATE = {
    currentUser: null,
    isAdmin: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: setAdminUser(action.payload),
                isAdmin: toggleAdmin(action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;