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
        const recordRes = yield axios.get(baseUrl + apiEndPoint + matchId);
        yield put(fetchRecordsSuccess(recordRes.data))
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
        console.log(payload)
        console.log(payload.matchId)
        const recordRes = yield axios.post(baseUrl + apiEndPoint, payload.payload);
        const records = recordRes.data;
        const matchId = payload.matchId;
        console.log(records)
        console.log(payload.matchId)
        console.log({records, matchId})
        yield put(postRecordsSuccess(records))

        //yield put(postRecordsSuccess({records, matchId }))
    } catch (error) {
        yield put(postRecordsFailure(error.message))
    }
}


export function* onPostRecordsSuccess() {
    console.log('onPostRecordsSuccess')
    yield takeLatest(RecordActionTypes.POST_RECORDS_SUCCESS, fetchMatchesAsyncAfterPost)
    
}

export function* fetchRecordsAsyncAfterPost(records) {
//export function* fetchRecordsAsyncAfterPost({payload: matchId}}) {
    console.log('postRecordsasyncAfterPost')
    console.log(records)
    //console.log(matchId)
    //yield fetchRecordsAsync(matchId);
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