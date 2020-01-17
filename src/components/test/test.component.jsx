import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchTeamsStart } from '../../redux/team/team.actions';
import { fetchLeaguesStart } from '../../redux/league/league.actions';
import { fetchMembersStart } from '../../redux/member/member.actions';
import { selectIsTeamFetching, selectIsTeamsLoaded } from '../../redux/team/team.selectors';
import { selectIsLeagueFetching, selectIsLeaguesLoaded } from '../../redux/league/league.selectors';
import { selectIsMemberFetching, selectIsMembersLoaded } from '../../redux/member/member.selectors';

const Test = ({ fetchTeamsStart, fetchLeaguesStart, fetchMembersStart }) => {
  useEffect(() => {
    fetchTeamsStart();
    fetchLeaguesStart();
    fetchMembersStart();
  }, [fetchTeamsStart, fetchLeaguesStart, fetchMembersStart]);

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
  isMemberLoaded: selectIsMembersLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchTeamsStart: () => dispatch(fetchTeamsStart()),
  fetchLeaguesStart: () => dispatch(fetchLeaguesStart()),
  fetchMembersStart: () => dispatch(fetchMembersStart())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Test);
