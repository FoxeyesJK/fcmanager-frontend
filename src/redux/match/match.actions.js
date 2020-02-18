import MatchActionTypes from './match.types';

export const fetchMatchesStart = () => ({
    type: MatchActionTypes.FETCH_MATCHES_START
})

export const fetchMatchesSuccess = matchesMap => ({
    type: MatchActionTypes.FETCH_MATCHES_SUCCESS,
    payload: matchesMap
})

export const fetchMatchesFailure = errorMessage => ({
    type: MatchActionTypes.FETCH_MATCHES_FAILURE,
    payload: errorMessage
})

export const postMatchesStart = matchesMap => ({
    type: MatchActionTypes.POST_MATCHES_START,
    payload: matchesMap
})

export const postMatchesSuccess = matchesMap => ({
    type: MatchActionTypes.POST_MATCHES_SUCCESS,
    payload: matchesMap
})

export const postMatchesFailure = errorMessage => ({
    type: MatchActionTypes.POST_MATCHES_FAILURE,
    payload: errorMessage
})

export const putMatchesStart = matchesMap => ({
    type: MatchActionTypes.PUT_MATCHES_START,
    payload: matchesMap
})

export const putMatchesSuccess = matchesMap => ({
    type: MatchActionTypes.PUT_MATCHES_SUCCESS,
    payload: matchesMap
})

export const putMatchesFailure = errorMessage => ({
    type: MatchActionTypes.PUT_MATCHES_FAILURE,
    payload: errorMessage
})

export const deleteMatchesStart = matchId => ({
    type: MatchActionTypes.DELETE_MATCHES_START,
    matchId: matchId
})

export const deleteMatchesSuccess = matchId => ({
    type: MatchActionTypes.DELETE_MATCHES_SUCCESS
})

export const deleteMatchesFailure = errorMessage => ({
    type: MatchActionTypes.DELETE_MATCHES_FAILURE,
    payload: errorMessage
})

export const setSelectedMatchId = matchId => ({
    type: MatchActionTypes.SET_SELECTED_MATCHID,
    matchId: matchId
})

export const setMatchHomeTeam = homeTeamId => ({
    type: MatchActionTypes.SET_MATCH_HOME_TEAM,
    homeTeamId: homeTeamId
})

export const setMatchAwayTeam = awayTeamId => ({
    type: MatchActionTypes.SET_MATCH_AWAY_TEAM,
    awayTeamId: awayTeamId
})

export const setMatchLocation = locationValue => ({
    type: MatchActionTypes.SET_MATCH_LOCATION,
    locationValue: locationValue
})

export const addNewMatch = match => ({
    type: MatchActionTypes.ADD_NEW_MATCH,
    matchToAdd: match
})
