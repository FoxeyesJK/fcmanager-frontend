import { all, call } from 'redux-saga/effects';

import { fetchTeamsStart } from './team/team.sagas';
import { leagueSagas } from './league/league.sagas';

export default function* rootSaga() {
    yield all([call(fetchTeamsStart), call(leagueSagas)]);
}