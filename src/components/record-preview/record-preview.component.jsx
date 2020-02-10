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
import { selectTeams } from '../../redux/team/team.selectors';
import { postRecordsStart, putRecordsStart } from '../../redux/record/record.actions';

import {
  RecordPreviewContainer,
  TeamRecordContainer,
  HomeTeamRecord,
  AwayTeamRecord,
  Record,
  PlayerContainer,
  Player,
  StyledAssistIcon,
  StyledScoreIcon,
  ButtonContainer,
  AddButtonContainer,
  SaveButtonContainer
} from './record-preview.styles.jsx';

import RecordItem from '../record-item/record-item.component';
import Dropdown from '../custom-dropdown/custom-dropdown.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const RecordPreview = ({ matchRecords, homeTeamId, awayTeamId, isAdmin, isRecordAdmin }) => {

  const [records, setRecords] = useState(matchRecords);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const teams = useSelector(selectTeams, shallowEqual)
  const dispatch = useDispatch();

  const selectedId = 0;

  useEffect(() => {
    setRecords(matchRecords)
  }, [matchRecords]);

  useEffect(() => {
    setRecords(records)
  }, [records]);

  useEffect(() => {
    setSelectedRecordId(selectedRecordId)
  }, [selectedRecordId]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(records)
    const test = records.filter(record => record.scoreMemberId != 0 && record.AssisMemberId != 0)
    console.log(test)
    //dispatch(postRecordsStart(records));
  }

  const handleChange = event => {
    console.log('target')
    console.log(event)
    console.log(...records)
    console.log(records.id)
    //setRecords({ ...records.find(record => record.id === event.value), scoreMemberId: event.value })

    // const { name, value } = event.target;

    // setMembers({ ...members, [name]: value });
    // member => setRecords({ ...records, scoreMemberId: member.value })
  }
  
  const newRecord = {scoreMemberId: 0, assistMemberId: 0 }
  let homeRecordCount = !!matchRecords ? matchRecords.filter(record => record.scoreTeamId === homeTeamId).length : null
  let awayRecordCount = !!matchRecords ? matchRecords.filter(record => record.scoreTeamId === awayTeamId).length : null
  console.log(homeRecordCount)
  console.log(awayRecordCount)
  
  if (homeRecordCount < awayRecordCount)
  {
    while(homeRecordCount != awayRecordCount)
    {
      matchRecords.push({scoreMemberId: 0, scoreTeamId: homeTeamId, assistMemberId: 0 })
      homeRecordCount++;
    }
  } else if (homeRecordCount > awayRecordCount)
  {
    while(homeRecordCount != awayRecordCount)
    {
      matchRecords.push({scoreMemberId: 0, scoreTeamId: awayTeamId, assistMemberId: 0 })
      awayRecordCount++
    }
  }
  console.log(matchRecords)
    
  return (
        <RecordPreviewContainer onSubmit={handleSubmit}>
          <TeamRecordContainer>
          <HomeTeamRecord>
          {
            !!matchRecords ?
              matchRecords.filter(record => record.scoreTeamId === homeTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={homeTeamId} handleChange={handleChange} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
                            ) : null
          }
          {
            <RecordItem record={newRecord} teamId={homeTeamId} isAdmin={isAdmin}/>
          }
          </HomeTeamRecord>
          <AwayTeamRecord>
          {
            !!matchRecords ?
              matchRecords.filter(record => record.scoreTeamId === awayTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={awayTeamId} handleChange={handleChange} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
                            ) : null
          }
          {
            <RecordItem record={newRecord} teamId={homeTeamId} isAdmin={isAdmin}/>
          }
          </AwayTeamRecord>
          </TeamRecordContainer>
          {
            isAdmin && isRecordAdmin ?
            <ButtonContainer>
            <AddButtonContainer>
            <CustomButton>Add</CustomButton>
            </AddButtonContainer>
            <SaveButtonContainer>
            <CustomButton type='submit'>Save</CustomButton>
            </SaveButtonContainer>
          </ButtonContainer>
          : null
          }

        </RecordPreviewContainer>
  )
}

export default RecordPreview;



