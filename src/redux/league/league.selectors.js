import { createSelector } from 'reselect';

const selectLeague = state => state.league;

//Use selectLeagues if API contains Key, Text, Value
export const selectLeagues = createSelector(
    [selectLeague],
    league => league.leagues.map(league => { return { value: league.id, label: league.name }})
)

export const selectCurrentLeagueId = createSelector(
    [selectLeague],
    league => league.currentLeagueId
)

export const selectChampion = createSelector(
    [selectLeague],
    league => league.standings[0]
)

export const selectStandings = createSelector(
    [selectLeague],
    league => league.standings,
)

export const selectMatchRecords = createSelector(
    [selectLeague],
    league => league.matchRecords,
)

export const selectIsLeagueFetching = createSelector(
    [selectLeague],
    league => league.isFetching
)

export const selectIsLeaguesLoaded = createSelector(
    [selectLeague],
    league => !!league.leagues
)
