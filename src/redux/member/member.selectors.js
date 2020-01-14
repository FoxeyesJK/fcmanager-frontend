import { createSelector } from 'reselect';

const selectMember = state => state.member;

export const selectMembers = createSelector(
    [selectMember],
    member => member.members
)

export const selectIsMemberFetching = createSelector(
    [selectMember],
    member => member.isFetching
)

export const selectIsMembersLoaded = createSelector(
    [selectMember],
    member => !!member.members
)