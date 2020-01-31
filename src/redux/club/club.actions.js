import ClubActionTypes from './club.types';

export const fetchMembersStart = () => ({
    type: MemberActionTypes.FETCH_MEMBERS_START
})

export const fetchMembersSuccess = membersMap => ({
    type: MemberActionTypes.FETCH_MEMBERS_SUCCESS,
    payload: membersMap
})

export const fetchMembersFailure = errorMessage => ({
    type: MemberActionTypes.FETCH_MEMBERS_FAILURE,
    payload: errorMessage
})

export const setCurrentClub = club => ({
    type: 
})