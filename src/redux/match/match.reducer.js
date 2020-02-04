import MatchActionTypes from './match.types';

const INITIAL_STATE = {
    matches: [],
    isFetching: false,
    errorMessage: undefined
};

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MatchActionTypes.FETCH_MATCHES_START:
        case MatchActionTypes.POST_MATCHES_START:
        case MatchActionTypes.PUT_MATCHES_START:
            return {
                ...state,
                isFetching: true
            }
        case MatchActionTypes.FETCH_MATCHES_SUCCESS:
        case MatchActionTypes.POST_MATCHES_SUCCESS:
        case MatchActionTypes.PUT_MATCHES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: action.payload
            }
        case MatchActionTypes.FETCH_MATCHES_FAILURE:
        case MatchActionTypes.POST_MATCHES_FAILURE:
        case MatchActionTypes.FUT_MATCHES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default matchReducer;