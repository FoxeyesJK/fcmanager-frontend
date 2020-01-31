import ClubActionTypes from './club.types';

export const fetchClubsStart = () => ({
    type: ClubActionTypes.FETCH_CLUBS_START
})

export const fetchMembersSuccess = club => ({
    type: ClubActionTypes.FETCH_CLUBS_SUCCESS,
    payload: club
})

export const fetchMembersFailure = errorMessage => ({
    type: ClubActionTypes.FETCH_CLUBS_FAILURE,
    payload: errorMessage
})

export const setCurrentClub = club => ({
    type: ClubActionTypes.SET_CURRENT_CLUB,
    payload: club
})