import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
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

import { postMatchesStart, putMatchesStart, setMatchHomeTeam, setMatchAwayTeam } from '../../redux/match/match.actions';
import { toggleRecordHidden } from '../../redux/record/record.actions';

import { selectTeams } from '../../redux/team/team.selectors';
import { selectMatchItem } from '../../redux/match/match.selectors';


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
  DateTimePickerContainer,
  ButtonContainer,
  AddButtonContainer,
  SaveButtonContainer
} from './fixture-detail-item.styles.jsx';


import RecordPreview from '../record-preview/record-preview.component';
import Dropdown from '../custom-dropdown/custom-dropdown.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectIsMatchesLoaded } from '../../redux/match/match.selectors';
import { selectIsHidden } from '../../redux/record/record.selectors';

moment.locale('en')
momentLocalizer()

const FixtureDetailItem = ({ type, isAdmin }) => {
  const teams = useSelector(selectTeams, shallowEqual)
  const match = useSelector(selectMatchItem, shallowEqual)
  //const [matches, setMatches] = useState(match);
  const isRecordHidden = useSelector(selectIsHidden, shallowEqual)
  const dispatch = useDispatch();

  console.log(match)

  const { id, homeTeamId, homeTeamLogoUrl, homeScore, awayTeamId, awayTeamLogoUrl, awayScore, scheduledAt, location, league} = match;

  // useEffect(() => {
  //   setMatches(match)
  // }, [match]);

  // useEffect(() => {
  //   setMatches(matches)
  // }, [matches]);

  const handleSubmit = type => event => {
    event.preventDefault();
    console.log(scheduledAt)
    const response = dispatch(!match.id ? postMatchesStart(match) : putMatchesStart(match))

    !!response.payload ? dispatch(toggleRecordHidden(false)) : alert('Failed to save data.')
  }

  const handleIsRecordAdmin = event => {
    dispatch(toggleRecordHidden(true))
  }
  
  const handleChange = event => {
    const { name, value } = event.target;
  
    //setMatches({ ...matches, [name]: value });
  }
    
  return (
    <FixtureDetailItemContainer isAdmin={isAdmin}>
      <FormContainer onSubmit={handleSubmit(type)}>
        {
          console.log('test')
        }
        {
          console.log(homeTeamId)
        }
        {
          console.log(awayTeamId)
        }
        <TeamContainer>
            {
              isAdmin && isRecordHidden
              ?
              <CustomDropdown
                name='team'
                value={homeTeamId}
                handleChange={team => dispatch(setMatchHomeTeam(team.value))}//setMatches({ ...matches, homeTeamId: team.value })}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon style={{backgroundImage: `url(${homeTeamLogoUrl})`}}/>
              </IconContainer>
              }
            {!isAdmin || !isRecordHidden ? 
            <ScoreContainer>
              { homeScore }
              -
              { awayScore }
            </ScoreContainer>
            : null
            } 
            {
              isAdmin && isRecordHidden
              ?
              <CustomDropdown
                name='team'
                value={awayTeamId}
                handleChange={team => dispatch(setMatchAwayTeam(team.value))}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon style={{backgroundImage: `url(${awayTeamLogoUrl})`}}/>
              </IconContainer>
            }
        </TeamContainer>
        {
        isAdmin && isRecordHidden ? 
        <ScoreContainer>
              { homeScore }
              -
              { awayScore }
        </ScoreContainer>
        : null
        }
          {
            isAdmin && isRecordHidden
            ? <FixtureContainer>
              <DateTimePickerContainer>
                <DateTimePicker 
                  defaultValue={new Date()} 
                  value={new Date(scheduledAt)}
                  //onChange={date => setMatches({ ...matches, scheduledAt: date })}
                />
              </DateTimePickerContainer>
              <LocationContainer isAdmin={isAdmin}>
                <FormInput
                  name='location'
                  type='text'
                  value={location}
                  handleChange={handleChange}
                  required
                />
              </LocationContainer>
              <CustomButton type='submit'>Save & Score Change</CustomButton>
              </FixtureContainer>
            : <FixtureContainer>
            <LeagueContainer>{league}</LeagueContainer>
            <Schedule>{moment(scheduledAt).format('llll')}</Schedule>
            <LocationContainer>{location}</LocationContainer>
            </FixtureContainer>
          }
        </FormContainer>
        {
          id != 0 ?  
        <RecordPreview matchId={id} homeTeamId={homeTeamId} awayTeamId={awayTeamId} isAdmin={isAdmin} handleIsRecordAdmin={handleIsRecordAdmin} />
          : null
      } 
    </FixtureDetailItemContainer>
  )
}

export default FixtureDetailItem;


