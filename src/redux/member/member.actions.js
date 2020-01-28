import MemberActionTypes from './member.types';
import axios from 'axios';
//const url = 'https://jsonplaceholder.typicode.com/users';
const url = 'https://localhost:5612/member';

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

export const fetchMembersStartAsync = () => {
    return dispatch => {
        dispatch(fetchMembersStart());

        const memberRes = axios.get(url)
            .then(res => {
                dispatch(fetchMembersSuccess(res.data));
            })
            .catch(error => dispatch(fetchMembersFailure(error.message)));
    }
}
