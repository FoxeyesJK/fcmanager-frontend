import MatchActionTypes from './match.types';

const INITIAL_STATE = {
    matches: [],
    isFetching: false,
    errorMessage: undefined
};

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MatchActionTypes.FETCH_MATCHES_START:
            return {
                ...state,
                isFetching: true
            }
        case MatchActionTypes.FETCH_MATCHES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: action.payload
            }
        case MatchActionTypes.FETCH_MATCHES_FAILURE:
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