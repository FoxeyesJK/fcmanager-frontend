import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchMatchesSuccess,
    fetchMatchesFailure,
    postMatchesSuccess,
    postMatchesFailure,
    putMatchesSuccess,
    putMatchesFailure,
} from './match.actions';

import MatchActionTypes from './match.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'match/';
export function* fetchMatchesAsync() {
    try {
        const matchRes = yield axios.get(baseUrl + apiEndPoint);
        yield put(fetchMatchesSuccess(matchRes.data))
    } catch (error) {
        yield put(fetchMatchesFailure(error.message))
    }
}

export function* fetchMatchesStart() {
    yield takeLatest(
        MatchActionTypes.FETCH_MATCHES_START, //Start listening to actions
        fetchMatchesAsync //moment they heard run function
    );
}

export function* postMatchesAsync({payload}) {
    try {
        const resMatch = yield axios.post(baseUrl + apiEndPoint, payload);
        const resData = resMatch.data;
        yield put(postMatchesSuccess(resData))
    } catch (error) {
        yield put(postMatchesFailure(error.message))
    }
}

export function* fetchMatchesAsyncAfterPost() {
    yield fetchMatchesAsync();
}

export function* onPostMatchesSuccess() {
    yield takeLatest(MatchActionTypes.POST_MATCHES_SUCCESS, fetchMatchesAsyncAfterPost)
}

export function* postMatchesStart() {
    yield takeLatest(
        MatchActionTypes.POST_MATCHES_START,
        postMatchesAsync
    );
}

export function* putMatchesAsync({payload}) {
    console.log('putMatchesAsync');
    try {
        const resMatch = yield axios.put(baseUrl + apiEndPoint + payload.id, payload);
        const resData = resMatch.data;
        yield put(putMatchesSuccess(resData))
    } catch (error) {
        yield put(putMatchesFailure(error.message))
    }
}

export function* fetchMatchesAsyncAfterPut() {
    yield fetchMatchesAsync();
}

export function* onPutMatchesSuccess() {
    yield takeLatest(MatchActionTypes.PUT_MATCHES_SUCCESS, fetchMatchesAsyncAfterPut)
}

export function* putMatchesStart() {
    yield takeLatest(
        MatchActionTypes.PUT_MATCHES_START,
        putMatchesAsync
    );
}


export function* matchSagas() {
    yield all([
        call(fetchMatchesStart), 
        call(postMatchesStart),
        call(onPostMatchesSuccess),
        call(putMatchesStart),
        call(onPutMatchesSuccess),
    ]);
}