import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.selectCurrentUser
)

export const selectIsAdmin= createSelector(
    [selectUser],
    user => user.isAdmin
)
