import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchTeamsSuccess,
    fetchTeamsFailure
} from './team.actions';

import TeamActionTypes from './team.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'team/';
export function* fetchTeamsAsync() {
    try {
        const teamRes = yield axios.get(baseUrl + apiEndPoint);
        yield put(fetchTeamsSuccess(teamRes.data))
    } catch (error) {
        yield put(fetchTeamsFailure(error.message))
    }
}

export function* fetchTeamsStart() {
    yield takeLatest(
        TeamActionTypes.FETCH_TEAMS_START,
        fetchTeamsAsync
    );
}

export function* roleSagas() {
    yield all([
        call(fetchTeamsStart)
    ]);
}
