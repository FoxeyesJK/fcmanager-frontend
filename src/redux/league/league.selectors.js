import { createSelector } from 'reselect';

const selectLeague = state => state.league;

//Use selectLeagues if API contains Key, Text, Value
export const selectLeagues = createSelector(
    [selectLeague],
    league => league.leagues,
)

export const selectLeagueOptions = createSelector(
    [selectLeagues],
    leagues => leagues.map(league => { return { key: league.id, value: league.id, text: league.name }})
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
