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
  FormContainer,
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

import RecordPreview from '../record-preview/record-preview.component';
import Dropdown from '../custom-dropdown/custom-dropdown.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

moment.locale('en')
momentLocalizer()

const FixtureDetailItem = ({ type, match, teams, isAdmin }) => {
  const [matches, setMatches] = useState(match);
  const { homeTeamId, homeTeamName, homeScore, awayTeamId, awayTeamName, awayScore, scheduledAt, location, league, matchRecords} = matches;

  useEffect(() => {
    console.log('fired')
    console.log(matches)
    setMatches(matches)
  }, [matches]);

  const handleSubmit = type => event => {
    event.preventDefault();

    //type == 'add' ? postMatchesStart(matches) : putMatchesStart(matches);
  }
  
  const handleChange = event => {
    const { name, value } = event.target;
  
    setMatches({ ...matches, [name]: value });
  }
    
  return (
    <FixtureDetailItemContainer isAdmin={isAdmin}>
      {
        console.log(match)
      }
      <FormContainer onSubmit={handleSubmit(type)}>
        <TeamContainer>
            {
              isAdmin 
              ?
              <CustomDropdown
                name='team'
                value={homeTeamId}
                handleChange={team => setMatches({ ...matches, homeTeamId: team.value })}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon />
              </IconContainer>
              }
            {!isAdmin ?
            <ScoreContainer>
              { homeScore }
              -
              { awayScore }
            </ScoreContainer>
            : null
            } 
            {
              isAdmin 
              ?
              <CustomDropdown
                name='team'
                value={awayTeamId}
                handleChange={team => setMatches({ ...matches, awayTeamId: team.value })}
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
        isAdmin ? 
        <ScoreContainer>
              { homeScore }
              -
              { awayScore }
        </ScoreContainer>
        : null
        }
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
          <RecordPreview matchRecords={matchRecords} homeTeamId={homeTeamId} awayTeamId={awayTeamId} isAdmin={isAdmin} />
        <CustomButton type='submit'>Save</CustomButton>
        </FormContainer>
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


