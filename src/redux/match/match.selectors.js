import { createSelector } from 'reselect';
import _ from 'lodash';

const selectMatch = state => state.match;

const newMatch = {
    id: 0,
    homeTeamId: 0,
    homeScore: 0,
    awayTeamId: 0,
    awayScore: 0,
    scheduledAt: new Date(),
    location: '',
    leagueId: 1,
    clubId: 1,
    matchRecords: []
  }

export const selectMatches = createSelector(
    [selectMatch],
    match => match.matches
)

export const selectMatchItem =  createSelector(
    [selectMatch],
    match => match.selectedMatchId > 0 ?
     match.matches.find(m => m.id === match.selectedMatchId) : 
     newMatch
)

export const selectIsMatchFetching = createSelector(
    [selectMatch],
    match => match.isFetching
)

export const selectIsMatchesLoaded = createSelector(
    [selectMatch],
    match => !!match.matches
)

export const selectScheduledMatches = createSelector(
    [selectMatches],
    matches => _.chain(matches).groupBy('scheduledOn').map((matches, scheduledOn) => {
        const items = matches.map((match) => { return match });
        return ({
            scheduledOn,
            items
        });
    })
)