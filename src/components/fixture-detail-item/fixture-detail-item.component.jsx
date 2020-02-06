import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { Combobox } from 'react-input-enhancements';
import { DropdownList } from 'react-widgets'
import Select from 'react-select'

import 'react-widgets/dist/css/react-widgets.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectTeams } from '../../redux/team/team.selectors';


import {
  FixtureDetailItemContainer,
  Title,
  IconContainer,
  TeamIcon,
  TeamContainer,
  FixtureContainer,
  LeagueContainer,
  Schedule,
  LocationContainer,
  ScoreContainer,
  Record,
  HomeRecord,
  AwayRecord,
  RecordContainer,
  PlayerContainer,
  Player,
  StyledAssistIcon,
  StyledScoreIcon,
  StyledDropdown,
  DateTimePickerContainer
} from './fixture-detail-item.styles.jsx';

import DropdownTeam from '../dropdown-team/dropdown-team.component';
import Dropdown from '../custom-dropdown/custom-dropdown.component';
import DropdownLeague from '../dropdown-league/dropdown-league.component';
import DropdownLocation from '../dropdown-location/dropdown-location.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';

moment.locale('en')
momentLocalizer()

const FixtureDetailItem = ({ match, id, teams, isAdmin }) => {
  const [matches, setMatches] = useState(match);
  const { homeTeamName, homeScore, awayTeamName, awayScore, scheduledAt, location, league, teamId} = match;

  useEffect(() => {
    setMatches(matches)
  }, [matches]);

  const handleSubmit = type => event => {
    event.preventDefault();

    //type == 'add' ? postMembersStart(matches) : putMembersStart(matches);
  }
  
  const handleChange = event => {
    const { name, value } = event.target;
  
    setMatches({ ...matches, [name]: value });
  }
    

 
  return (
    <FixtureDetailItemContainer isAdmin={isAdmin}>
            {
        console.log('hellow')
      }
      {
        console.log(match)
      }
        <TeamContainer>
            {
              isAdmin 
              ?
              <CustomDropdown
                name='team'
                value={teamId}
                handleChange={team => setMatches({ ...matches, teamId: team.value })}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon />
              </IconContainer>
              }
            <ScoreContainer>
              { homeScore }
              -
              { awayScore }
            </ScoreContainer> 
            {
              isAdmin 
              ?
              <CustomDropdown
                name='team'
                value={teamId}
                handleChange={team => setMatches({ ...matches, teamId: team.value })}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon />
              </IconContainer>
              }
        </TeamContainer>
        
          {
            isAdmin 
            ? <FixtureContainer>
              <DateTimePickerContainer>
                <DateTimePicker defaultValue={new Date()} />
              </DateTimePickerContainer>
              <LocationContainer isAdmin={isAdmin}>
                <FormInput
                  name='name'
                  type='text'
                  value={location}
                  handleChange={handleChange}
                  required
                />
              </LocationContainer>
              </FixtureContainer>
            : <FixtureContainer>
            <LeagueContainer>{league}</LeagueContainer>
            <Schedule>{moment(scheduledAt).format('LLLL')}</Schedule>
            <LocationContainer>{location}</LocationContainer>
            </FixtureContainer>
          }
        <RecordContainer>
          <Record>
            <PlayerContainer>
              <StyledScoreIcon />
              {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
              <StyledScoreIcon />
            </PlayerContainer>
          </Record>
          <Record>
            <PlayerContainer>
              <StyledAssistIcon />   
                {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
              <StyledAssistIcon />
            </PlayerContainer>
          </Record>
        </RecordContainer>
        <RecordContainer>
        <Record>
            <PlayerContainer>
              <StyledScoreIcon />
              <Player>Nathan Jeong</Player>
            </PlayerContainer>
            <PlayerContainer>
              <Player>Jake Kwon</Player>
              <StyledScoreIcon />
            </PlayerContainer>
          </Record>
          <Record>
            <PlayerContainer>
              <StyledAssistIcon />
              <Player>Nathan Jeong</Player>
            </PlayerContainer>
            <PlayerContainer>
              <Player>Jake Kwon</Player>
              <StyledAssistIcon />
            </PlayerContainer>
          </Record>
        </RecordContainer>
        <RecordContainer>
        <Record>
            <PlayerContainer>
              <StyledScoreIcon />
              <Player>Nathan Jeong</Player>
            </PlayerContainer>
            <PlayerContainer>
              <Player>Jake Kwon</Player>
              <StyledScoreIcon />
            </PlayerContainer>
          </Record>
          <Record>
            <PlayerContainer>
              <StyledAssistIcon />
              <Player>Nathan Jeong</Player>
            </PlayerContainer>
            <PlayerContainer>
              <Player>Jake Kwon</Player>
              <StyledAssistIcon />
            </PlayerContainer>
          </Record>
        </RecordContainer>
    </FixtureDetailItemContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  teams: selectTeams
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FixtureDetailItem);


