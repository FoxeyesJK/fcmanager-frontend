import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchLeaguesSuccess,
    fetchLeaguesFailure
} from './league.actions';

import LeagueActionTypes from './league.types';

const url = 'https://jsonplaceholder.typicode.com/users';

export function* fetchLeaguesAsync() {
    yield console.log('I am fired');

    try {
        const leagueRes = yield axios.get(url);
        yield put(fetchLeaguesSuccess(leagueRes.data))
    } catch (error) {
        yield put(fetchLeaguesFailure(error.message))
    }
}

export function* fetchLeaguesStart() {
    yield takeLatest(
        LeagueActionTypes.FETCH_LEAGUES_START,
        fetchLeaguesAsync
    );
}

export function* leagueSagas() {
    yield all([call(fetchLeaguesStart)]);
}