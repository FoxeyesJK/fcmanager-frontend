import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchTeamsStart } from '../../redux/team/team.actions';
import { fetchLeaguesStart } from '../../redux/league/league.actions';
import { selectIsTeamFetching, selectIsTeamsLoaded } from '../../redux/team/team.selectors';
import { selectIsLeagueFetching, selectIsLeaguesLoaded } from '../../redux/league/league.selectors';

class Test extends React.Component {
  componentDidMount() {
    const { fetchTeamsStart, fetchLeaguesStart } = this.props;
    fetchTeamsStart();
    fetchLeaguesStart();
  };

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isTeamFetching: selectIsTeamFetching,
  isTeamLoaded: selectIsTeamsLoaded,
  isLeagueFetching: selectIsLeagueFetching,
  isLeagueLoaded: selectIsLeaguesLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchTeamsStart: () => dispatch(fetchTeamsStart()),
  fetchLeaguesStart: () => dispatch(fetchLeaguesStart())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Test);
