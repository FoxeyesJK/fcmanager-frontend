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
import { selectRecords } from '../../redux/record/record.selectors';
import { fetchRecordsStart, postRecordsStart, putRecordsStart } from '../../redux/record/record.actions';
import { selectIsRecordFetching, selectIsRecordsLoaded } from '../../redux/record/record.selectors';

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

const RecordPreview = ({ fetchRecordsStart, matchRecords, matchId, homeTeamId, awayTeamId, isAdmin, isRecordAdmin }) => {
  const [records, setRecords] = useState(matchRecords);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  //const records = useSelector(selectRecords, shallowEqual)
  const dispatch = useDispatch();

  const selectedId = 0;

  useEffect(() => {
    setRecords(matchRecords)
  }, [matchRecords]);

  useEffect(() => {
    setRecords(records)
  }, [records]);

  useEffect(() => {
    fetchRecordsStart(matchId);
  }, [fetchRecordsStart, matchId]);

  useEffect(() => {
    setSelectedRecordId(selectedRecordId)
  }, [selectedRecordId]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('handlesubmit')
    console.log(records)
    const test = records.filter(record => record.scoreMemberId != 0 && record.scoreMemberId != 0)
    console.log(test)
    //dispatch(postRecordsStart(records));
  }

  const handleChange = event => {
    console.log('target')

    //setRecords({ ...records.find(record => record.id === event.value), scoreMemberId: event.value })

    // const { name, value } = event.target;

    // setMembers({ ...members, [name]: value });
    // member => setRecords({ ...records, scoreMemberId: member.value })
  }
  
  const newRecord = {scoreMemberId: 0, assistMemberId: 0 }
  let homeRecordCount = !!records ? records.filter(record => record.scoreTeamId === homeTeamId).length : null
  let awayRecordCount = !!records ? records.filter(record => record.scoreTeamId === awayTeamId).length : null
  console.log(matchId)
  
  if (homeRecordCount < awayRecordCount)
  {
    while(homeRecordCount != awayRecordCount)
    {
      records.push({scoreMemberId: 0, scoreTeamId: homeTeamId, assistMemberId: 0 })
      homeRecordCount++;
    }
  } else if (homeRecordCount > awayRecordCount)
  {
    while(homeRecordCount != awayRecordCount)
    {
      records.push({scoreMemberId: 0, scoreTeamId: awayTeamId, assistMemberId: 0 })
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

const mapStateToProps = createStructuredSelector({
  isRecordFetching: selectIsRecordFetching,
  isRecordLoaded: selectIsRecordsLoaded,
  matchRecords: selectRecords
})

const mapDispatchToProps = dispatch => ({
  fetchRecordsStart: (matchId) => dispatch(fetchRecordsStart({ matchId }))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(RecordPreview);




