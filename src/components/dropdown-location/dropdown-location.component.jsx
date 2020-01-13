import React from 'react';

import {
    DropDownContainer,
    DropDownItemContainer
} from './dropdown-location.styles.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectTeams } from '../../redux/team/team.selectors';

// import { fetchTeamsStartAsync } from '../../redux/team/team.actions';
// import { selectIsTeamFetching } from '../../redux/team/team.selectors';

import DropdownLocationItem from '../dropdown-location-item/dropdown-location-item.component';

const DropdownLocation = ({ teams, dispatch}) => (
    <DropDownContainer>
        <DropDownItemContainer>
        {
            teams.length ? (
            teams.map(team => (
                <DropdownLocationItem key={team.id} team={team} />
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
    )(DropdownLocation));
