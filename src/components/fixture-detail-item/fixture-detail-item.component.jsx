import React from 'react';
import moment from 'moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { Combobox } from 'react-input-enhancements';

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


const FixtureDetailItem = ({ match, id, isAdmin }) => {
  const { HomeTeamName, HomeScore, AwayTeamName, AwayScore, ScheduledOn, LocationName, League} = match;
 
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
              { HomeScore }
              -
              { AwayScore }
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
                  dropdownItems={[
                    { value: 'RED', id: 1 },
                    { value: 'BLUE', id: 2 },
                    { value: 'YELLOW', id: 3}
                  ]}
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

