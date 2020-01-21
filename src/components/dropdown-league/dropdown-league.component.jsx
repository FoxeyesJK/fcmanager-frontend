import React from 'react';

import { Dropdown } from 'semantic-ui-react'

import {
    DropDownLeagueContainer
} from './dropdown-league.styles.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectLeagueOptions } from '../../redux/league/league.selectors';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

// import { fetchTeamsStartAsync } from '../../redux/team/team.actions';
// import { selectIsTeamFetching } from '../../redux/team/team.selectors';

import DropdownLeagueItem from '../dropdown-league-item/dropdown-league-item.component';

const DropdownLeague = ({ toggleLeagueHidden, league, leagueOptions, isAdmin }) => (
    <DropDownLeagueContainer onClick={toggleLeagueHidden}>
        2020 Spring Championship League
    </DropDownLeagueContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleLeagueHidden: () => dispatch(toggleLeagueHidden())
 });
 
 export default connect(null, mapDispatchToProps)(DropdownLeague);
 