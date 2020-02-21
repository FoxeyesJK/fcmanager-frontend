import LeagueActionTypes from './league.types';

const INITIAL_STATE = {
    hidden: true,
    leagues: [],
    standings: [],
    isFetching: false,
    errorMessage: undefined
};

const leagueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LeagueActionTypes.TOGGLE_LEAGUE_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        case LeagueActionTypes.FETCH_LEAGUES_START:
            return {
                ...state,
                isFetching: true
            }
        case LeagueActionTypes.FETCH_LEAGUES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                standings: action.payload
            }
        case LeagueActionTypes.FETCH_LEAGUES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default leagueReducer;