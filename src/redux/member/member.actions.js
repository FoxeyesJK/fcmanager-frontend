import MemberActionTypes from './member.types';

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

export const postMembersStart = membersMap => ({
    type: MemberActionTypes.POST_MEMBERS_START,
    payload: membersMap
})

export const postMembersSuccess = membersMap => ({
    type: MemberActionTypes.POST_MEMBERS_SUCCESS,
    payload: membersMap
})

export const postMembersFailure = errorMessage => ({
    type: MemberActionTypes.POST_MEMBERS_FAILURE,
    payload: errorMessage
})

export const putMembersStart = membersMap => ({
    type: MemberActionTypes.PUT_MEMBERS_START,
    payload: membersMap
})

export const putMembersSuccess = membersMap => ({
    type: MemberActionTypes.PUT_MEMBERS_SUCCESS,
    payload: membersMap
})

export const putMembersFailure = errorMessage => ({
    type: MemberActionTypes.PUT_MEMBERS_FAILURE,
    payload: errorMessage
})

export const deleteMembersStart = memberId => ({
    type: MemberActionTypes.DELETE_MEMBERS_START,
    memberId: memberId
})

export const deleteMembersSuccess = () => ({
    type: MemberActionTypes.DELETE_MEMBERS_SUCCESS
})

export const deleteMembersFailure = errorMessage => ({
    type: MemberActionTypes.DELETE_MEMBERS_FAILURE,
    payload: errorMessage
})


export const setCurrentMemberId = currentMemberId => ({
    type: MemberActionTypes.SET_CURRENT_MEMBERID,
    currentMemberId: currentMemberId
})

export const addNewMember = member => ({
    type: MemberActionTypes.ADD_NEW_MEMBER,
    memberToAdd: member
})
