import { createSelector } from 'reselect';
import _ from 'lodash';

const selectMatch = state => state.match;

export const selectMatches = createSelector(
    [selectMatch],
    match => match.matches
)

export const selectSelectedMatchId = createSelector(
    [selectMatch],
    match => match.selectedMatchId
)

export const selectMatchItem =  createSelector(
    [selectMatch],
    match => match.matches.find(m => m.id === match.selectedMatchId)
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