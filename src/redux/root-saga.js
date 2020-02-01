import { all, call } from 'redux-saga/effects';

import { fetchTeamsStart } from './team/team.sagas';
import { leagueSagas } from './league/league.sagas';
import { memberSagas } from './member/member.sagas';
import { matchSagas } from './match/match.sagas';
import { roleSagas } from './role/role.sagas';

export default function* rootSaga() {
    yield all([call(fetchTeamsStart), call(leagueSagas), call(memberSagas), call(matchSagas), call(roleSagas)]);
}