import TeamActionTypes from './team.types';

const INITIAL_STATE = {
    teams: [],
    isFetching: false,
    errorMessage: undefined
};

const teamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TeamActionTypes.FETCH_TEAMS_START:
            return {
                ...state,
                isFetching: true
            }
        case TeamActionTypes.FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                teams: action.payload
            }
        case TeamActionTypes.FETCH_TEAMS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default teamReducer;