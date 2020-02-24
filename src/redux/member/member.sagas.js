import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
//listens for every action 
//call: invokes method

import {
    fetchMembersSuccess,
    fetchMembersFailure,
    postMembersSuccess,
    postMembersFailure,
    putMembersSuccess,
    putMembersFailure,
    deleteMembersSuccess,
    deleteMembersFailure
} from './member.actions';

import MemberActionTypes from './member.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'member/';
export function* fetchMembersAsync() {
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
    try {
        const member = yield axios.post(baseUrl + apiEndPoint, payload);
        yield put(postMembersSuccess(member.data))
    } catch (error) {
        yield put(postMembersFailure(error.message))
    }
}

export function* fetchMembersAsyncAfterPost() {
    yield fetchMembersAsync();
}

export function* onPostMembersSuccess() {
    yield takeLatest(MemberActionTypes.POST_MEMBERS_SUCCESS, fetchMembersAsyncAfterPost)
}


export function* postMembersStart() {
    yield takeLatest(
        MemberActionTypes.POST_MEMBERS_START,
        postMembersAsync
    );
}

export function* putMembersAsync({payload}) {
    try {
        const member = yield axios.put(baseUrl + apiEndPoint + payload.id, payload);
        yield put(putMembersSuccess(member.data))
    } catch (error) {
        yield put(putMembersFailure(error.message))
    }
}

export function* fetchMembersAsyncAfterPut() {
    yield fetchMembersAsync();
}

export function* onPutMembersSuccess() {
    yield takeLatest(MemberActionTypes.PUT_MEMBERS_SUCCESS, fetchMembersAsyncAfterPut)
}

export function* putMembersStart() {
    yield takeLatest(
        MemberActionTypes.PUT_MEMBERS_START,
        putMembersAsync
    );
}

export function* deleteMembersAsync({memberId}) {
    try {
        const resMember = yield axios.delete(baseUrl + apiEndPoint + memberId);
        yield put(deleteMembersSuccess(resMember.data))
    } catch (error) {
        yield put(deleteMembersFailure(error.message))
    }
}

export function* fetchMembersAsyncAfterDelete() {
    yield fetchMembersAsync();
}

export function* onDeleteMembersSuccess() {
    yield takeLatest(MemberActionTypes.DELETE_MEMBERS_SUCCESS, fetchMembersAsyncAfterDelete)
}

export function* deleteMembersStart() {
    yield takeLatest(
        MemberActionTypes.DELETE_MEMBERS_START,
        deleteMembersAsync
    );
}



export function* memberSagas() {
    yield all([
        call(fetchMembersStart), 
        call(postMembersStart),
        call(onPostMembersSuccess),
        call(putMembersStart),
        call(onPutMembersSuccess),
        call(deleteMembersStart),
        call(onDeleteMembersSuccess)
    ]);
}