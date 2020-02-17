import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchMatchesAsyncAfterPost } from '../match/match.sagas';

import {
    fetchRecordsSuccess,
    fetchRecordsFailure,
    postRecordsSuccess,
    postRecordsFailure,
    putRecordsSuccess,
    putRecordsFailure,
} from './record.actions';

import RecordActionTypes from './record.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'matchrecord/';
export function* fetchRecordsAsync({payload: { matchId }}) {
    try {
        console.log(baseUrl + apiEndPoint + matchId)
        const recordRes = yield axios.get(baseUrl + apiEndPoint + matchId);
        const records = recordRes.data;
         console.log(records)
        yield put(fetchRecordsSuccess(records))
    } catch (error) {
        yield put(fetchRecordsFailure(error.message))
    }
}

export function* fetchRecordsStart() {
    yield takeLatest(
        RecordActionTypes.FETCH_RECORDS_START, 
        fetchRecordsAsync 
    );
}

export function* postRecordsAsync({payload}) {
    try {
        console.log('postRecordsasync')
        const recordRes = yield axios.post(baseUrl + apiEndPoint, payload.payload);
        const records = recordRes.data;
        const matchId = payload.matchId;
        //yield put(postRecordsSuccess(records))

        yield put(postRecordsSuccess({records, matchId}))
    } catch (error) {
        yield put(postRecordsFailure(error.message))
    }
}


export function* onPostRecordsSuccess() {
    console.log('onPostRecordsSuccess')
    yield takeLatest(RecordActionTypes.POST_RECORDS_SUCCESS, fetchRecordsAsyncAfterPost)
    
}

//export function* fetchRecordsAsyncAfterPost(records) {
export function* fetchRecordsAsyncAfterPost({records, matchId}) {
    console.log('postRecordsasyncAfterPost')
    console.log(records)
    console.log(matchId)
    //console.log(matchId)
    yield fetchMatchesAsyncAfterPost();
    yield fetchRecordsAsync({payload: {matchId}});
}

export function* postRecordsStart() {
    yield takeLatest(
        RecordActionTypes.POST_RECORDS_START,
        postRecordsAsync
    );
}

export function* recordSagas() {
    yield all([
        call(fetchRecordsStart), 
        call(postRecordsStart),
        call(onPostRecordsSuccess)
        //call(putRecordsStart),
        //call(onPutRecordsSuccess),
    ]);
}