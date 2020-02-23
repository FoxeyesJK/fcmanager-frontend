import LeagueActionTypes from './league.types';

export const toggleLeagueHidden = () => ({
    type: LeagueActionTypes.TOGGLE_LEAGUE_HIDDEN
})

export const fetchLeaguesStart = () => ({
    type: LeagueActionTypes.FETCH_LEAGUES_START
})

export const fetchLeaguesSuccess = LeaguesMap => ({
    type: LeagueActionTypes.FETCH_LEAGUES_SUCCESS,
    payload: LeaguesMap
})

export const fetchLeaguesFailure = errorMessage => ({
    type: LeagueActionTypes.FETCH_LEAGUES_FAILURE,
    payload: errorMessage
})

export const fetchLeagueMatchRecordsStart = () => ({
    type: LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_START
})

export const fetchLeagueMatchRecordsSuccess = LeaguesMap => ({
    type: LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_SUCCESS,
    payload: LeaguesMap
})

export const fetchLeagueMatchRecordsFailure = errorMessage => ({
    type: LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_FAILURE,
    payload: errorMessage
})