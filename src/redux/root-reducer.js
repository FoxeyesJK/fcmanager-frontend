import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //window local storage

import clubReducer from './club/club.reducer'
import teamReducer from './team/team.reducer';
import leagueReducer from './league/league.reducer';
import memberReducer from './member/member.reducer';
import matchReducer from './match/match.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  club: clubReducer,
  team: teamReducer,
  league: leagueReducer,
  member: memberReducer,
  match: matchReducer
});

export default persistReducer(persistConfig, rootReducer);