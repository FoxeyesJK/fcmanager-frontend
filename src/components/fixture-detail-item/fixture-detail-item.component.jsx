import React from 'react';
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

moment.locale('en')
momentLocalizer()

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
              <Dropdown/>  
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
              <Dropdown/>  
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
                <Dropdown/>
              </LeagueContainer>
              <DateTimePickerContainer>
                <DateTimePicker defaultValue={new Date()} />
              </DateTimePickerContainer>
              <LocationContainer isAdmin={isAdmin}>
              <Dropdown/>
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

export default FixtureDetailItem;
