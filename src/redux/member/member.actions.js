import MemberActionTypes from './member.types';
import axios from 'axios';
// import { memberService } from '../../services/services'
//const url = 'https://jsonplaceholder.typicode.com/users';
const apiEndPoint = 'member';

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