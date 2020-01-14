import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchMatchesSuccess,
    fetchMatchesFailure
} from './match.actions';

import MatchActionTypes from './match.types';

const url = 'https://jsonplaceholder.typicode.com/users';

export function* fetchTeamsAsync() {
    yield console.log('I am fired');

    try {
        const matchRes = yield axios.get(url);
        yield put(fetchMatchesSuccess(matchRes.data))
    } catch (error) {
        yield put(fetchMatchesFailure(error.message))
    }
}

export function* fetchMatchesStart() {
    yield takeLatest(
        MatchActionTypes.FETCH_MATCHES_START,
        fetchMatchesAsync
    );
}