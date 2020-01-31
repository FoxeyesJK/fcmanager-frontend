import RoleActionTypes from './role.types';

const INITIAL_STATE = {
    roles: [],
    isFetching: false,
    errorMessage: undefined
};

const roleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoleActionTypes.FETCH_ROLES_START:
            return {
                ...state,
                isFetching: true
            }
        case RoleActionTypes.FETCH_ROLES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                roles: action.payload
            }
        case RoleActionTypes.FETCH_ROLES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default roleReducer;