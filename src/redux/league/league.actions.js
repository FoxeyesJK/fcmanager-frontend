import LeagueActionTypes from './league.types';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users'; 

export const toggleLeagueHidden = () => ({
    type: LeagueActionTypes.TOGGLE_LEAGUE_HIDDEN
})

export const fetchLeaguesStart = () => ({
    type: LeagueActionTypes.FETCH_LEAGUES_START
})

export const fetchLeaguesSuccess = LeaguesMap => ({
    type: LeagueActionTypes.FETCH_LEAGUES_SUCCESS,
    payload: LeaguesMap
})

export const fetchLeaguesFailure = errorMessage => ({
    type: LeagueActionTypes.FETCH_LEAGUES_FAILURE,
    payload: errorMessage
})

export const fetchLeaguesStartAsync = () => {
    return dispatch => {
        dispatch(fetchLeaguesStart());

        const leagueRes = axios.get(url)
            .then(res => {
                dispatch(fetchLeaguesSuccess(res.data));
            })
            .catch(error => dispatch(fetchLeaguesFailure(error.message)));
    }
}