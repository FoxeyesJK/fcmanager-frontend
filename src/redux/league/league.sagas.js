import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchLeaguesSuccess,
    fetchLeaguesFailure,
} from './league.actions';

import LeagueActionTypes from './league.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'league/1/standings';
export function* fetchLeaguesAsync() {
    try {
        const response = yield axios.get(baseUrl + apiEndPoint);
        yield put(fetchLeaguesSuccess(response.data))
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
    yield all([
        call(fetchLeaguesStart), 
    ]);
}