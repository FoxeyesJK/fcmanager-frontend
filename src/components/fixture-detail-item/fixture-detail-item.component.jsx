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

import { postMatchesStart, putMatchesStart } from '../../redux/match/match.actions';
import { toggleRecordHidden } from '../../redux/record/record.actions';

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

const FixtureDetailItem = ({ type, match, isAdmin }) => {
  const [matches, setMatches] = useState(match);
  const [isRecordAdmin, setRecordAdmin] = useState(null);
  const teams = useSelector(selectTeams, shallowEqual)
  const isRecordHidden = useSelector(selectIsHidden, shallowEqual)
  const dispatch = useDispatch();

  const { id, homeTeamId, homeTeamLogoUrl, homeScore, awayTeamId, awayTeamLogoUrl, awayScore, scheduledAt, location, league} = matches;

  useEffect(() => {
    setMatches(match)
  }, [match]);

  useEffect(() => {
    setMatches(matches)
  }, [matches]);

  const handleSubmit = type => event => {
    event.preventDefault();
    console.log(scheduledAt)
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
                handleChange={team => setMatches({ ...matches, awayTeamId: team.value })}
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
                  onChange={date => setMatches({ ...matches, scheduledAt: date })}
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

// const mapStateToProps = createStructuredSelector({
//   teams: selectTeams
// })

// const mapDispatchToProps = dispatch => ({
//   postMatchesStart: (matches) => dispatch(postMatchesStart(matches)),
//   putMatchesStart: (matches) => dispatch(putMatchesStart(matches)),
//   postMatchesSuccess: (matches) => dispatch(postMatchesSuccess(matches)),
//   putMatchesSuccess: (matches) => dispatch(putMatchesSuccess(matches)),
//   putMatchesFailure: (matches) => dispatch(putMatchesFailure(matches))
// })

// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps
// )(FixtureDetailItem);


