import MatchActionTypes from './match.types';
import { updateHomeTeamToMatch, updateAwayTeamToMatch, updateMatch} from './match.utils';

const INITIAL_STATE = {
    matches: [],
    selectedMatchId: 0,
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
            return {
                ...state,
                isFetching: false,
                matches: action.payload
            }
        case MatchActionTypes.POST_MATCHES_SUCCESS:
        case MatchActionTypes.PUT_MATCHES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: updateMatch(state.matches, action.payload) //action payload?
            }
        case MatchActionTypes.FETCH_MATCHES_FAILURE:
        case MatchActionTypes.POST_MATCHES_FAILURE:
        case MatchActionTypes.PUT_MATCHES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case MatchActionTypes.SET_SELECTED_MATCHID:
            return {
                ...state,
                selectedMatchId: action.matchId
            };
        case MatchActionTypes.SET_MATCH_HOME_TEAM:
            return {
                ...state,
                matches: updateHomeTeamToMatch(state.matches, state.selectedMatchId, action.homeTeamId)
            };
        case MatchActionTypes.SET_MATCH_AWAY_TEAM:
            return {
                ...state,
                matches: updateAwayTeamToMatch(state.matches, state.selectedMatchId, action.awayTeamId)
            };
        default:
            return state;
    }
}

export default matchReducer;