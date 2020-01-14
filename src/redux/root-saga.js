import { all, call } from 'redux-saga/effects';

import { fetchTeamsStart } from './team/team.sagas';

export default function* rootSaga() {
    yield all([call(fetchTeamsStart)]);
}