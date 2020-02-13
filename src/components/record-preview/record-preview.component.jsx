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
import { fetchRecordsStart, postRecordsStart, putRecordsStart, addRowToRecord } from '../../redux/record/record.actions';
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

const RecordPreview = ({ fetchRecordsStart, addRowToRecord, records, matchId, homeTeamId, awayTeamId, isAdmin, isRecordAdmin, handleIsRecordAdmin }) => {
  //const [records, setRecords] = useState(matchRecords);
  //const records = useSelector(selectRecords, shallowEqual)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setRecords(matchRecords)
  // }, [matchRecords]);

  useEffect(() => {
    fetchRecordsStart(matchId);
  }, [fetchRecordsStart, matchId]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('handlesubmit')
    console.log(records)
    const payload = records.filter(record => record.scoreMemberId != null || record.assistMemberId != null)
    dispatch(postRecordsStart({payload, matchId}));
    //success
    //handleIsRecordAdmin();
  }

  const handleHomeClick = event => {
    addRowToRecord({scoreMemberId: null, scoreTeamId: homeTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0})
  }

  const handleAwayClick = event => {
    addRowToRecord({scoreMemberId: null, scoreTeamId: awayTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0})
  }
    
  return (
    <RecordPreviewContainer onSubmit={handleSubmit}>
    {
      console.log('recordpreview again')
    }
    {
      console.log(records)
    }
          <TeamRecordContainer>
          <HomeTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === homeTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={homeTeamId} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
                            ) : null
          }
          {/* {
            <RecordItem record={newRecord} teamId={homeTeamId} isAdmin={isAdmin}/>
          } */}
          </HomeTeamRecord>
          <AwayTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === awayTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={awayTeamId} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
                            ) : null
          }
          {/* {
            <RecordItem record={newRecord} teamId={homeTeamId} isAdmin={isAdmin}/>
          } */}
          </AwayTeamRecord>
          </TeamRecordContainer>
          {
            isAdmin && isRecordAdmin ?
            <ButtonContainer>
            <AddButtonContainer>
            <CustomButton type='button' handleClick={handleHomeClick}>Add</CustomButton>
            <CustomButton type='button' handleClick={handleAwayClick}>Add</CustomButton>
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
  records: selectRecords
})

const mapDispatchToProps = dispatch => ({
  fetchRecordsStart: (matchId) => dispatch(fetchRecordsStart({ matchId })),
  addRowToRecord: record => dispatch(addRowToRecord(record))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(RecordPreview);




