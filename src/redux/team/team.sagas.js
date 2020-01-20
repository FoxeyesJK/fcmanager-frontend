import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
//listens for every action 
//call: invokes method

import {
    fetchTeamsSuccess,
    fetchTeamsFailure
} from './team.actions';

import TeamActionTypes from './team.types';

const url = 'https://jsonplaceholder.typicode.com/users';
export function* fetchTeamsAsync() {
    yield console.log('I am fired');

    try {
        const teamRes = yield axios.get(url);
        yield put(fetchTeamsSuccess(teamRes.data))
    } catch (error) {
        yield put(fetchTeamsFailure(error.message))
    }
}

export function* fetchTeamsStart() {
    yield takeLatest(
        TeamActionTypes.FETCH_TEAMS_START, //Start listening to actions
        fetchTeamsAsync //moment they heard run function
    );
}