import LeagueActionTypes from './league.types';

const INITIAL_STATE = {
    hidden: true,
    currentLeagueId: 1,
    leagues: [],
    standings: [],
    matchRecords: [],
    isFetching: false,
    errorMessage: undefined
};

const leagueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LeagueActionTypes.FETCH_LEAGUES_START:
            return {
                ...state,
                isFetching: true
            }
        case LeagueActionTypes.FETCH_LEAGUES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                leagues: action.payload
            }
        case LeagueActionTypes.FETCH_LEAGUES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case LeagueActionTypes.FETCH_LEAGUE_STANDINGS_START:
            return {
                ...state,
                isFetching: true
            }
        case LeagueActionTypes.FETCH_LEAGUE_STANDINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                standings: action.payload
            }
        case LeagueActionTypes.FETCH_LEAGUE_STANDINGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_START:
            return {
                ...state,
                isFetching: true
            }
        case LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matchRecords: action.payload
            }
        case LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case LeagueActionTypes.SET_CURRENT_LEAGUE:
            return {
                ...state,
                currentLeagueId: action.leagueId
            };
        default:
            return state;
    }
}

export default leagueReducer;