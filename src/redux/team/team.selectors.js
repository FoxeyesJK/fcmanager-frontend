import { createSelector } from 'reselect';

const selectTeam = state => state.team;

export const selectTeams = createSelector(
    [selectTeam],
    (team) => team.teams
)