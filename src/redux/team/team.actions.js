import TeamActionTypes from './team.types';

export const getTeam = team => ({
    type: TeamActionTypes.GET_TEAM,
    payload: team
})
