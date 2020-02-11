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

import MatchActionTypes from './record.types';

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
        MatchActionTypes.FETCH_RECORDS_START, 
        fetchRecordsAsync 
    );
}

export function* postRecordsAsync({payload}) {
    try {
        const recordRes = yield axios.post(baseUrl + apiEndPoint, payload);
        yield put(postRecordsSuccess(recordRes.data))
    } catch (error) {
        yield put(postRecordsFailure(error.message))
    }
}


export function* onPostRecordsSuccess() {
    yield takeLatest(MatchActionTypes.POST_RECORDS_SUCCESS, fetchMatchesAsyncAfterPost)
}

export function* postRecordsStart() {
    yield takeLatest(
        MatchActionTypes.POST_RECORDS_START,
        postRecordsAsync
    );
}

// export function* putRecordsAsync({payload}) {
//     console.log('putRecordsAsync');
//     try {
//         const { resRecord } = yield axios.put(baseUrl + apiEndPoint + payload.id, payload);
//         yield put(putRecordsSuccess(resRecord.data))
//     } catch (error) {
//         yield put(putRecordsFailure(error.message))
//     }
// }

// export function* fetchRecordsAsyncAfterPut() {
//     yield fetchRecordsAsync();
// }

// export function* onPutRecordsSuccess() {
//     yield takeLatest(MatchActionTypes.PUT_RECORDS_SUCCESS, fetchRecordsAsyncAfterPut)
// }

// export function* putRecordsStart() {
//     yield takeLatest(
//         MatchActionTypes.PUT_RECORDS_START,
//         putRecordsAsync
//     );
// }


export function* recordSagas() {
    yield all([
        call(fetchRecordsStart), 
        call(postRecordsStart),
        call(onPostRecordsSuccess),
        //call(putRecordsStart),
        //call(onPutRecordsSuccess),
    ]);
}