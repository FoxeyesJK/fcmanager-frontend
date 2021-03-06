import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import 'react-widgets/dist/css/react-widgets.css';

import { postMatchesStart, putMatchesStart } from '../../redux/match/match.actions';
import { toggleRecordHidden } from '../../redux/record/record.actions';

import { selectIsAdmin } from '../../redux/user/user.selectors';
import { selectTeams } from '../../redux/team/team.selectors';
import { selectMatchItem } from '../../redux/match/match.selectors';


import {
  FixtureDetailItemContainer,
  FormContainer,
  IconContainer,
  TeamIcon,
  TeamContainer,
  FixtureContainer,
  LeagueContainer,
  Schedule,
  LocationContainer,
  ScoreContainer,
  DateTimePickerContainer,
} from './fixture-detail-item.styles.jsx';


import RecordPreview from '../record-preview/record-preview.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectIsHidden } from '../../redux/record/record.selectors';

moment.locale('en')
momentLocalizer()

const FixtureDetailItem = ({ type }) => {
  const teams = useSelector(selectTeams, shallowEqual)
  const match = useSelector(selectMatchItem, shallowEqual)
  const [matches, setMatches] = useState(match);
  const isRecordHidden = useSelector(selectIsHidden, shallowEqual)
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    setMatches(match)
  }, [match]);

  useEffect(() => {
    setMatches(matches)
  }, [matches]);

  const { id, homeTeamId, homeTeamLogoUrl, homeScore, awayTeamId, awayTeamLogoUrl, awayScore, scheduledAt, location, league} = matches;


  const handleSubmit = type => event => {
    event.preventDefault();
    const response = dispatch(!matches.id ? postMatchesStart(matches) : putMatchesStart(matches))

    !!response.payload ? dispatch(toggleRecordHidden(false)) : alert('Failed to save data.')
  }

  const handleIsRecordAdmin = event => {
    dispatch(toggleRecordHidden(true))
  }
  
  const handleChange = event => {
    const { name, value } = event.target;
    setMatches({ ...matches, [name]: value });
  }
    
  return (
    <FixtureDetailItemContainer isAdmin={isAdmin}>
      <FormContainer onSubmit={handleSubmit(type)}>
        <TeamContainer>
            {
              isAdmin && isRecordHidden
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
                <TeamIcon homeTeamLogoUrl={homeTeamLogoUrl} />
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
                handleChange={team => setMatches({ ...matches, awayTeamId: team.value })}
                options={teams}
                required
              />
              :
              <IconContainer>
                <TeamIcon homeTeamLogoUrl={awayTeamLogoUrl} />
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
                  onChange={date => setMatches({ ...matches, scheduledAt: moment(date).format() })}
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
        <RecordPreview matchId={id} homeTeamId={homeTeamId} awayTeamId={awayTeamId} handleIsRecordAdmin={handleIsRecordAdmin} />
      } 
    </FixtureDetailItemContainer>
  )
}

export default FixtureDetailItem;


