import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
//listens for every action 
//call: invokes method

import {
    fetchMembersSuccess,
    fetchMembersFailure
} from './member.actions';

import MemberActionTypes from './member.types';

const url = 'https://jsonplaceholder.typicode.com/users';
export function* fetchMembersAsync() {
    yield console.log('I am fired');

    try {
        const memberRes = yield axios.get(url);
        yield put(fetchMembersSuccess(memberRes.data))
    } catch (error) {
        yield put(fetchMembersFailure(error.message))
    }
    //getTeam(teamRes.data)
}

export function* fetchMembersStart() {
    yield takeLatest(
        MemberActionTypes.FETCH_MEMBERS_START, //Start listening to actions
        fetchMembersAsync //moment they heard run function
    );
}

export function* memberSagas() {
    yield all([call(fetchMembersStart)]);
}


