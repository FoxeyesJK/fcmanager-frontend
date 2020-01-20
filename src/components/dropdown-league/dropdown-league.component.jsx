import React from 'react';

import { Dropdown } from 'semantic-ui-react'

import {
    DropDownContainer,
    DropDownItemContainer
} from './dropdown-league.styles.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectLeagueOptions } from '../../redux/league/league.selectors';

// import { fetchTeamsStartAsync } from '../../redux/team/team.actions';
// import { selectIsTeamFetching } from '../../redux/team/team.selectors';

import DropdownLeagueItem from '../dropdown-league-item/dropdown-league-item.component';

const DropdownLeague = ({ league, leagueOptions, isAdmin }) => (
    <DropDownContainer>
        {
        leagueOptions.length ? 
        (<Dropdown
            placeholder='Select League'
            selection
            search
            options={leagueOptions}
            isAdmin={isAdmin}
        />) : null
        }
    </DropDownContainer>

)

const mapStateToProps = createStructuredSelector({
    leagueOptions: selectLeagueOptions
})

export default withRouter(connect(
    mapStateToProps
    //mapDispatchToProps
    )(DropdownLeague));


    