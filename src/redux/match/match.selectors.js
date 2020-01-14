import { createSelector } from 'reselect';

const selectMatch = state => state.match;

export const selectMatches = createSelector(
    [selectMatch],
    match => match.matches
)

export const selectIsMatchFetching = createSelector(
    [selectMatch],
    match => match.isFetching
)

export const selectIsMatchesLoaded = createSelector(
    [selectMatch],
    match => !!match.matches
)