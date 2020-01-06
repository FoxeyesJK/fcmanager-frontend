import TeamActionTypes from './team.types';

const INITIAL_STATE = {
    teams: []
};

const teamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TeamActionTypes.GET_TEAM:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return state;
    }
}

export default teamReducer;