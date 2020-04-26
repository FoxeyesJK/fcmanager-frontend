import { takeLatest, select, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
//listens for every action 
//call: invokes method

import {
    fetchLeaguesSuccess,
    fetchLeaguesFailure,
    fetchLeagueStandingsSuccess,
    fetchLeagueStandingsFailure,
    fetchLeagueMatchRecordsSuccess,
    fetchLeagueMatchRecordsFailure
} from './league.actions';

import LeagueActionTypes from './league.types';

import { selectCurrentLeagueId } from './league.selectors';
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiEndPoint = 'league/';

export function* fetchLeaguesAsync() {
    const currentLeagueId = yield select(selectCurrentLeagueId)
    try {
        const response = yield axios.get(baseUrl + apiEndPoint + currentLeagueId);
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


export function* fetchLeagueStandingsAsync() {
    const currentLeagueId = yield select(selectCurrentLeagueId)
    try {
        const response = yield axios.get(baseUrl + apiEndPoint + currentLeagueId + '/standings');
        yield put(fetchLeagueStandingsSuccess(response.data))
    } catch (error) {
        yield put(fetchLeagueStandingsFailure(error.message))
    }
}

export function* fetchLeagueStandingsStart() {
    yield takeLatest(
        LeagueActionTypes.FETCH_LEAGUE_STANDINGS_START, 
        fetchLeagueStandingsAsync 
    );
}

export function* fetchLeagueMatchRecordsAsync() {
    const currentLeagueId = yield select(selectCurrentLeagueId)
    try {
        const response = yield axios.get(baseUrl + apiEndPoint + currentLeagueId + '/matchrecords');
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
        call(fetchLeagueStandingsStart), 
        call(fetchLeagueMatchRecordsStart)
    ]);
}