import { createSelector } from 'reselect';
import _ from 'lodash';

const selectMember = state => state.member;

export const selectMembers = createSelector(
    [selectMember],
    member => member.members
)

export const selectTeamMembers = createSelector(
    [selectMembers],
    members => _.chain(members).groupBy('teamName').map((members, name) => {
        const items = members.map((member) => { return member });
        return ({
            name,
            items
        });
    })
)

export const selectMemberNames = createSelector(
    [selectMembers],
    members => members.map(member => { return { value: member.id, label: member.name, teamId: member.teamId }})
)


export const selectIsMemberFetching = createSelector(
    [selectMember],
    member => member.isFetching
)

export const selectIsMembersLoaded = createSelector(
    [selectMember],
    member => !!member.members
)

export const selectMemberItem =  createSelector(
    [selectMember],
    member => member.members.find(m => m.id === member.currentMemberId)
)

export const selectCurrentMemberId = createSelector(
    [selectMember],
    member => member.selectCurrentMemberId
)