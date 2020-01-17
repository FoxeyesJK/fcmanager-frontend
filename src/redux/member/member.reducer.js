import MemberActionTypes from './member.types';

const INITIAL_STATE = {
    members: [],
    isFetching: false,
    errorMessage: undefined
};

const memberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MemberActionTypes.FETCH_MEMBERS_START:
            return {
                ...state,
                isFetching: true
            }
        case MemberActionTypes.FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                members: action.payload
            }
        case MemberActionTypes.FETCH_MEMBERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default memberReducer;