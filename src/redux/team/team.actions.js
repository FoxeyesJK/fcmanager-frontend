import TeamActionTypes from './team.types';

export const fetchTeamsStart = () => ({
    type: TeamActionTypes.FETCH_TEAMS_START
})

export const fetchTeamsSuccess = teamsMap => ({
    type: TeamActionTypes.FETCH_TEAMS_SUCCESS,
    payload: teamsMap
})

export const fetchTeamsFailure = errorMessage => ({
    type: TeamActionTypes.FETCH_TEAMS_FAILURE,
    payload: errorMessage
})

