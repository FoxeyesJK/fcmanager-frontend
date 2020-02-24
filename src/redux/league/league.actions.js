import LeagueActionTypes from './league.types';

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

export const fetchLeagueStandingsStart = () => ({
    type: LeagueActionTypes.FETCH_LEAGUE_STANDINGS_START
})

export const fetchLeagueStandingsSuccess = LeaguesMap => ({
    type: LeagueActionTypes.FETCH_LEAGUE_STANDINGS_SUCCESS,
    payload: LeaguesMap
})

export const fetchLeagueStandingsFailure = errorMessage => ({
    type: LeagueActionTypes.FETCH_LEAGUE_STANDINGS_FAILURE,
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

export const setCurrentLeague = leagueId => ({
    type: LeagueActionTypes.SET_CURRENT_LEAGUE,
    leagueId: leagueId
})
