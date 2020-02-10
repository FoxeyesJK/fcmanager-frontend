import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchTeamsStart } from '../../redux/team/team.actions';
import { fetchLeaguesStart } from '../../redux/league/league.actions';
import { fetchMembersStart } from '../../redux/member/member.actions';
import { fetchMatchesStart } from '../../redux/match/match.actions';
import { fetchRecordsStart } from '../../redux/record/record.actions';
import { fetchClubsStart } from '../../redux/club/club.actions';
import { fetchRolesStart } from '../../redux/role/role.actions';
import { selectIsTeamFetching, selectIsTeamsLoaded } from '../../redux/team/team.selectors';
import { selectIsLeagueFetching, selectIsLeaguesLoaded } from '../../redux/league/league.selectors';
import { selectIsMemberFetching, selectIsMembersLoaded } from '../../redux/member/member.selectors';
import { selectIsMatchFetching, selectIsMatchesLoaded } from '../../redux/match/match.selectors';
import { selectIsRecordFetching, selectIsRecordsLoaded } from '../../redux/record/record.selectors';
//import { selectIsClubFetching, selectIsClubsLoaded } from '../../redux/club/club.selectors';
import { selectIsRoleFetching, selectIsRolesLoaded } from '../../redux/role/role.selectors';

const Test = ({ fetchTeamsStart, fetchLeaguesStart, fetchMembersStart, fetchMatchesStart, fetchRecordsStart, fetchRolesStart }) => {
  useEffect(() => {
    fetchTeamsStart();
    fetchLeaguesStart();
    fetchMembersStart();
    fetchMatchesStart();
    fetchRecordsStart();
    //fetchClubsStart();
    fetchRolesStart();
  }, [fetchTeamsStart, fetchLeaguesStart, fetchMembersStart, fetchMatchesStart, fetchRecordsStart, fetchRolesStart]);

  return (
    <div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isTeamFetching: selectIsTeamFetching,
  isTeamLoaded: selectIsTeamsLoaded,
  isLeagueFetching: selectIsLeagueFetching,
  isLeagueLoaded: selectIsLeaguesLoaded,
  isMemberFetching: selectIsMemberFetching,
  isMemberLoaded: selectIsMembersLoaded,
  isMatchFetching: selectIsMatchFetching,
  isMatchLoaded: selectIsMatchesLoaded,
  isRecordFetching: selectIsRecordFetching,
  isRecordLoaded: selectIsRecordsLoaded,
  //isClubFetching: selectIsClubFetching,
  //isClubLoaded: selectIsClubsLoaded,
  isRoleFetching: selectIsRoleFetching,
  isRoleLoaded: selectIsRolesLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchTeamsStart: () => dispatch(fetchTeamsStart()),
  fetchLeaguesStart: () => dispatch(fetchLeaguesStart()),
  fetchMembersStart: () => dispatch(fetchMembersStart()),
  fetchMatchesStart: () => dispatch(fetchMatchesStart()),
  fetchRecordsStart: () => dispatch(fetchRecordsStart()),
  //fetchClubsStart: () => dispatch(fetchClubsStart()),
  fetchRolesStart: () => dispatch(fetchRolesStart())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Test);
