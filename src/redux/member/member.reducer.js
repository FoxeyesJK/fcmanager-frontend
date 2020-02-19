import MemberActionTypes from './member.types';

const INITIAL_STATE = {
    members: [],
    isFetching: false,
    currentMemberId: undefined,
    errorMessage: undefined
};

const memberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MemberActionTypes.FETCH_MEMBERS_START:
        case MemberActionTypes.POST_MEMBERS_START:
        case MemberActionTypes.PUT_MEMBERS_START:
            return {
                ...state,
                isFetching: true
            }
        case MemberActionTypes.FETCH_MEMBERS_SUCCESS:
        case MemberActionTypes.POST_MEMBERS_SUCCESS:
        case MemberActionTypes.PUT_MEMBERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                members: action.payload
            }
        case MemberActionTypes.FETCH_MEMBERS_FAILURE:
        case MemberActionTypes.POST_MEMBERS_FAILURE:
        case MemberActionTypes.PUT_MEMBERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case MemberActionTypes.SET_CURRENT_MEMBERID:
            return {
                ...state,
                currentMemberId: action.currentMemberId
            };
        default:
            return state;
    }
}

export default memberReducer;