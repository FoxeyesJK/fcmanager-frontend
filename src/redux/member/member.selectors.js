import { createSelector } from 'reselect';
import _ from 'lodash';

const selectMember = state => state.member;

export const selectMembers = createSelector(
    [selectMember],
    member => member.members
)

export const selectGroupMembers = createSelector(
    [selectMembers],
    members => _.chain(members).groupBy('name').map((members, name) => {
        const items = members.map((member) => { return member });
        return ({
            name,
            items
        });
    })
)

export const selectIsMemberFetching = createSelector(
    [selectMember],
    member => member.isFetching
)

export const selectIsMembersLoaded = createSelector(
    [selectMember],
    member => !!member.members
)