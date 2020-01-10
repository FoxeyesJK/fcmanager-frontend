import TeamActionTypes from './team.types';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';
// import 

export const fetchTeamsStart = () => ({
    type: TeamActionTypes.FETCH_TEAMS_START
})

export const fetchTeamsSuccess = teamsMap => ({
    type: TeamActionTypes.FETCH_TEAMS_SUCCESS,
    payload: teamsMap
})

export const fetchTeamsFailure = errorMessage => ({
    type: TeamActionTypes.FETCH_TEAMS_FAILURE,
    payload: errorMessage
})

export const fetchTeamsStartAsync = () => {
    return dispatch => {
        dispatch(fetchTeamsStart());

        const teamRes = axios.get(url)
            .then(res => {
                dispatch(fetchTeamsSuccess(res.data));
            })
            .catch(error => dispatch(fetchTeamsFailure(error.message)));
        //getTeam(teamRes.data)
    }
}


// export const getTeam = team = ({
//     type: TeamActionTypes.GET_TEAM,
//     payload: team
// })
