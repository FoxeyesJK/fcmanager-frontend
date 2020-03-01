import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer'
import clubReducer from './club/club.reducer'
import teamReducer from './team/team.reducer';
import leagueReducer from './league/league.reducer';
import memberReducer from './member/member.reducer';
import roleReducer from './role/role.reducer';
import matchReducer from './match/match.reducer';
import recordReducer from './record/record.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer,
  club: clubReducer,
  team: teamReducer,
  league: leagueReducer,
  member: memberReducer,
  match: matchReducer,
  role: roleReducer,
  record: recordReducer
});

export default persistReducer(persistConfig, rootReducer);