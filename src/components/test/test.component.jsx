import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchTeamsStart } from '../../redux/team/team.actions';
import { fetchLeaguesStart } from '../../redux/league/league.actions';
import { fetchMembersStart } from '../../redux/member/member.actions';
import { fetchMatchesStart } from '../../redux/match/match.actions';
import { selectIsTeamFetching, selectIsTeamsLoaded } from '../../redux/team/team.selectors';
import { selectIsLeagueFetching, selectIsLeaguesLoaded } from '../../redux/league/league.selectors';
import { selectIsMemberFetching, selectIsMembersLoaded } from '../../redux/member/member.selectors';
import { selectIsMatchFetching, selectIsMatchesLoaded } from '../../redux/match/match.selectors';

const Test = ({ fetchTeamsStart, fetchLeaguesStart, fetchMembersStart, fetchMatchesStart }) => {
  useEffect(() => {
    fetchTeamsStart();
    fetchLeaguesStart();
    fetchMembersStart();
    fetchMatchesStart();
  }, [fetchTeamsStart, fetchLeaguesStart, fetchMembersStart, fetchMatchesStart]);

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
  isMatchLoaded: selectIsMatchesLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchTeamsStart: () => dispatch(fetchTeamsStart()),
  fetchLeaguesStart: () => dispatch(fetchLeaguesStart()),
  fetchMembersStart: () => dispatch(fetchMembersStart()),
  fetchMatchesStart: () => dispatch(fetchMatchesStart())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Test);
