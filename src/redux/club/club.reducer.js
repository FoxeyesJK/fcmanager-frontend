import ClubActionTypes from './club.types';

const INITIAL_STATE = {
    currentClub: null,
};

const clubReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ClubActionTypes.FETCH_MEMBERS_START:
            return {
                ...state,
                currentClub: action.payload
            }
        default:
            return state;
    }
}

export default clubReducer;