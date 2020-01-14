import React from 'react';

import { connect } from 'react-redux';
//import { getTeam } from '../../redux/team/team.actions';
import { createStructuredSelector } from 'reselect';

import { fetchLeaguesStart } from '../../redux/league/league.actions';
import { selectIsLeagueFetching, selectIsLeaguesLoaded } from '../../redux/league/league.selectors';

const url = 'https://jsonplaceholder.typicode.com/todos';

class Test extends React.Component {
  componentDidMount() {
    const { fetchLeaguesStart } = this.props;
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
  isLeagueFetching: selectIsLeagueFetching,
  isLeagueLoaded: selectIsLeaguesLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchLeaguesStart: () => dispatch(fetchLeaguesStart())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Test);

  // return dispatch => {
  //   console.log("hi" + dispatch);
  //   dispatch({
  //     type: TeamActionTypes.GET_TEAM
  //   });
  //   return axios.get(url)
  //     .then(res => {
  //       console.log(res);
  //       dispatch({
  //         type: TeamActionTypes.GET_TEAM,
  //         payload: res.data
  //       })
  //     })
  //     .catch(error => {
  //       dispatch({
  //         type: TeamActionTypes.GET_TEAM,
  //         payload: ''
  //       })
  //     })
  // }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
  //     console.log(res);
  //     this.setState({ persons: res.data });
  //   })
  // }

// const mapDispatchToProps = dispatch => ({
//   getTeam: team => dispatch(getTeam(team))
// });

// export default connect (
//   null,
//   mapDispatchToProps
// )(Test);