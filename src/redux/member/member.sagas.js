import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
//listens for every action 
//call: invokes method

import {
    fetchMembersSuccess,
    fetchMembersFailure,
    postMembersSuccess,
    postMembersFailure
} from './member.actions';

import MemberActionTypes from './member.types';

//const url = 'https://jsonplaceholder.typicode.com/users';
const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'member';
export function* fetchMembersAsync() {
    yield console.log('I am fired');

    try {
        const memberRes = yield axios.get(baseUrl + apiEndPoint);
        yield put(fetchMembersSuccess(memberRes.data))
    } catch (error) {
        yield put(fetchMembersFailure(error.message))
    }
}

export function* fetchMembersStart() {
    yield takeLatest(
        MemberActionTypes.FETCH_MEMBERS_START, //Start listening to actions
        fetchMembersAsync //moment they heard run function
    );
}

export function* postMembersAsync({payload}) {
    yield console.log('postMember fired');

    yield console.log(payload);
    try {
        const { member } = yield axios.post(baseUrl + apiEndPoint, payload);
        yield put(postMembersSuccess(member)) //member.data
    } catch (error) {
        yield put(postMembersFailure(error.message))
    }
}

export function* postMembersStart() {
    yield takeLatest(
        MemberActionTypes.POST_MEMBERS_START,
        postMembersAsync
    );
}

export function* memberSagas() {
    yield all([
        call(fetchMembersStart), 
        call(postMembersStart)
    ]);
}