import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { getTeam } from '../../redux/team/team.actions';
import TeamActionTypes from '../../redux/team/team.types';

const url = 'https://jsonplaceholder.typicode.com/users';

class Test extends React.Component {

  async componentDidMount() {
    const { getTeam } = this.props;

    // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
    //   console.log(res);
    //   getTeam(res.data)
    //   //this.setState({ teams: res.data });
    // })

    const teamRes = await axios.get(url);
    getTeam(teamRes.data)
  };

  render() {
    //const { teams } = this.state;
    //console.log(teams);
    return (
      <div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getTeam: team => dispatch(getTeam(team))
});

export default connect (
  null,
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