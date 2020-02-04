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