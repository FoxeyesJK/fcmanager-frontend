import { createSelector } from 'reselect';
import _ from 'lodash';

const selectRole = state => state.role;

export const selectRoles = createSelector(
    [selectRole],
    role => role.roles
)

export const selectIsRoleFetching = createSelector(
    [selectRole],
    role => role.isFetching
)

export const selectIsRolesLoaded = createSelector(
    [selectRole],
    role => !!role.roles
)