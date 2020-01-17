import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //window local storage

import teamReducer from './team/team.reducer';
import leagueReducer from './league/league.reducer';
import memberReducer from './member/member.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  team: teamReducer,
  league: leagueReducer,
  member: memberReducer
});

export default persistReducer(persistConfig, rootReducer);