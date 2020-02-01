import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchRolesSuccess,
    fetchRolesFailure,
} from './role.actions';

import RoleActionTypes from './role.types';

const baseUrl = 'https://localhost:5612/';
const apiEndPoint = 'code/';
export function* fetchRolesAsync() {
    try {
        console.log('fetchCorefiredagain')
        const roleRes = yield axios.get(baseUrl + apiEndPoint);
        yield put(fetchRolesSuccess(roleRes.data))
    } catch (error) {
        yield put(fetchRolesFailure(error.message))
    }
}

export function* fetchRolesStart() {
    yield takeLatest(
        RoleActionTypes.FETCH_ROLES_START, //Start listening to actions
        fetchRolesAsync //moment they heard run function
    );
}

export function* roleSagas() {
    yield all([
        call(fetchRolesStart)
    ]);
}