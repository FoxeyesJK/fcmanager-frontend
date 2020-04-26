import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    fetchRolesSuccess,
    fetchRolesFailure,
} from './role.actions';

import RoleActionTypes from './role.types';

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiEndPoint = 'code/';
export function* fetchRolesAsync() {
    try {
        const roleRes = yield axios.get(baseUrl + apiEndPoint + 1);
        yield put(fetchRolesSuccess(roleRes.data))
    } catch (error) {
        yield put(fetchRolesFailure(error.message))
    }
}

export function* fetchRolesStart() {
    yield takeLatest(
        RoleActionTypes.FETCH_ROLES_START,
        fetchRolesAsync
    );
}

export function* roleSagas() {
    yield all([
        call(fetchRolesStart)
    ]);
}