import RoleActionTypes from './role.types';

export const fetchRolesStart = () => ({
    type: RoleActionTypes.FETCH_ROLES_START
})

export const fetchRolesSuccess = role => ({
    type: RoleActionTypes.FETCH_ROLES_SUCCESS,
    payload: role
})

export const fetchRolesFailure = errorMessage => ({
    type: RoleActionTypes.FETCH_ROLES_FAILURE,
    payload: errorMessage
})