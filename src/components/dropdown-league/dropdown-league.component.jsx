import React from 'react';

import {
    DropDownContainer,
    DropDownItemContainer
} from './dropdown-league.styles.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectTeams } from '../../redux/team/team.selectors';

// import { fetchTeamsStartAsync } from '../../redux/team/team.actions';
// import { selectIsTeamFetching } from '../../redux/team/team.selectors';

import DropdownLeagueItem from '../dropdown-league-item/dropdown-league-item.component';

const TeamDropdown = ({ teams, dispatch}) => (
    <DropDownContainer>
        <DropDownItemContainer>
        {
            teams.length ? (
            teams.map(team => (
                <DropdownLeagueItem key={team.id} team={team} />
            ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )
        }
        </DropDownItemContainer>
    </DropDownContainer>

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
