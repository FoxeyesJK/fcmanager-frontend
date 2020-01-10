import React from 'react';

import './team-dropdown.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectTeams } from '../../redux/team/team.selectors';

// import { fetchTeamsStartAsync } from '../../redux/team/team.actions';
// import { selectIsTeamFetching } from '../../redux/team/team.selectors';

import TeamDropdownItem from '../team-dropdown-item/team-dropdown-item.component';

const TeamDropdown = ({ teams, dispatch}) => (
    <div className='team-dropdown'>
        <div className='team-dropdown-items'>
            <select>
            {
                teams.length ? (
                teams.map(team => (
                    <TeamDropdownItem key={team.id} team={team} />
                ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
            </select>
        </div>
    </div>

)

const mapStateToProps = createStructuredSelector({
    teams: selectTeams
})

// const mapStateToProps = createStructuredSelector({
//     isTeamFetching: selectIsTeamFetching
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     fetchTeamsStartAsync: () => dispatch(fetchTeamsStartAsync())
//   });
  
export default withRouter(connect(
    mapStateToProps
    //mapDispatchToProps
    )(TeamDropdown));
