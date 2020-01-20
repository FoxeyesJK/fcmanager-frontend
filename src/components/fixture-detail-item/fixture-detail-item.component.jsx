import React from 'react';
import moment from 'moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { Combobox } from 'react-input-enhancements';
import { Dropdown } from 'semantic-ui-react'
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
  DateTimePickerContainer
} from './fixture-detail-item.styles.jsx';

import DropdownTeam from '../dropdown-team/dropdown-team.component';
import DropdownLeague from '../dropdown-league/dropdown-league.component';
import DropdownLocation from '../dropdown-location/dropdown-location.component';

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
]

const FixtureDetailItem = ({ match, id, isAdmin }) => {
  const { homeTeamName, homeScore, awayTeamName, awayScore, ScheduledOn, LocationName, League} = match;
 
  return (
    <FixtureDetailItemContainer isAdmin={isAdmin}>
        <TeamContainer>
            {
              isAdmin 
              ?
              <DropdownTeam 
                name='home'
                dropdownItems={[
                  { value: 'RED', id: 1 },
                  { value: 'BLUE', id: 2 },
                  { value: 'YELLOW', id: 3}
                ]}
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
              <DropdownTeam 
                name='home'
                dropdownItems={[
                  { value: 'RED', id: 1 },
                  { value: 'BLUE', id: 2 },
                  { value: 'YELLOW', id: 3}
                ]}
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
              <LeagueContainer isAdmin={isAdmin}>
                <DropdownLeague 
                  name='home'
                  required
                /> 
              </LeagueContainer>
              <DateTimePickerContainer>
                <DateTimePicker defaultValue={new Date()} />
              </DateTimePickerContainer>
              <LocationContainer isAdmin={isAdmin}>
                <DropdownLocation 
                  name='home'
                  dropdownItems={[
                    { value: 'RED', id: 1 },
                    { value: 'BLUE', id: 2 },
                    { value: 'YELLOW', id: 3}
                  ]}
                  required
                /> 
              </LocationContainer>
              </FixtureContainer>
            : <FixtureContainer>
            <LeagueContainer>{League}</LeagueContainer>
            <Schedule>{moment(ScheduledOn).format('LLLL')}</Schedule>
            <LocationContainer>{LocationName}</LocationContainer>
            </FixtureContainer>
          }
        <RecordContainer>
          <Record>
            <PlayerContainer>
              <StyledScoreIcon />
              {
                  isAdmin ?
                  <DropdownTeam 
                  name='home'
                  dropdownItems={[
                    { value: 'RED', id: 1 },
                    { value: 'BLUE', id: 2 },
                    { value: 'YELLOW', id: 3}
                  ]}
                  required
                />  
                : <Player>Nathan Jeong</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <DropdownTeam 
                  name='home'
                  dropdownItems={[
                    { value: 'RED', id: 1 },
                    { value: 'BLUE', id: 2 },
                    { value: 'YELLOW', id: 3}
                  ]}
                  required
                />  
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
                  <DropdownTeam 
                  name='home'
                  dropdownItems={[
                    { value: 'RED', id: 1 },
                    { value: 'BLUE', id: 2 },
                    { value: 'YELLOW', id: 3}
                  ]}
                  required
                />  
                : <Player>Nathan Jeong</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <Dropdown
                  placeholder='Select Member'
                  fluid
                  search
                  selection
                  options={friendOptions}
                />
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

export default FixtureDetailItem;
