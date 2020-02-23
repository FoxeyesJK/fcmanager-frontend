import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchLeaguesSuccess,
    fetchLeaguesFailure,
    fetchLeagueMatchRecordsSuccess,
    fetchLeagueMatchRecordsFailure
} from './league.actions';

import LeagueActionTypes from './league.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'league/1/';
export function* fetchLeaguesAsync() {
    try {
        const response = yield axios.get(baseUrl + apiEndPoint + 'standings');
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

export function* fetchLeagueMatchRecordsAsync() {
    try {
        const response = yield axios.get(baseUrl + apiEndPoint + 'matchrecords');
        yield put(fetchLeagueMatchRecordsSuccess(response.data))
    } catch (error) {
        yield put(fetchLeagueMatchRecordsFailure(error.message))
    }
}

export function* fetchLeagueMatchRecordsStart() {
    yield takeLatest(
        LeagueActionTypes.FETCH_LEAGUE_MATCHRECORDS_START, 
        fetchLeagueMatchRecordsAsync 
    );
}


export function* leagueSagas() {
    yield all([
        call(fetchLeaguesStart), 
        call(fetchLeagueMatchRecordsStart)
    ]);
}