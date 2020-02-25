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
import { selectIsAdmin } from '../../redux/user/user.selectors';
import { selectRecords } from '../../redux/record/record.selectors';
import { fetchRecordsStart, postRecordsStart, putRecordsStart, addRowToRecord, setIsRecordChangeable, toggleRecordHidden } from '../../redux/record/record.actions';
import { selectIsRecordFetching, selectIsRecordsLoaded, selectIsHidden } from '../../redux/record/record.selectors';

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

const RecordPreview = ({ fetchRecordsStart, addRowToRecord, records, matchId, homeTeamId, awayTeamId, isRecordAdmin, handleIsRecordAdmin}) => {
  //const [records, setRecords] = useState(matchRecords);
  const isRecordHidden = useSelector(selectIsHidden, shallowEqual);
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  const [tempRecordId, setTempRecordId] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setRecords(matchRecords)
  // }, [matchRecords]);

  useEffect(() => {
    fetchRecordsStart(matchId);
  }, [fetchRecordsStart, matchId]);

  const handleSubmit = event => {
    event.preventDefault();
    const payload = records.filter(record => record.scoreMemberId != null || record.assistMemberId != null)
    dispatch(postRecordsStart({payload, matchId}));
    //success
    dispatch(toggleRecordHidden(true))
    //handleIsRecordAdmin();
  }

  const handleHomeClick = event => {
    setTempRecordId(tempRecordId + 1);
    addRowToRecord({scoreMemberId: null, scoreTeamId: homeTeamId, assistTeamId: homeTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId})
  }

  const handleAwayClick = event => {
    setTempRecordId(tempRecordId + 1);
    addRowToRecord({scoreMemberId: null, scoreTeamId: awayTeamId, assistTeamId: awayTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId})
  }
    
  return (
    <RecordPreviewContainer onSubmit={handleSubmit}>
          <TeamRecordContainer>
          <HomeTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === homeTeamId || record.assistTeamId === homeTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={homeTeamId} isHomeTeam={true} isRecordHidden={isRecordHidden}/>
                            ) : null
          }
          </HomeTeamRecord>
          <AwayTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === awayTeamId || record.assistTeamId === awayTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={awayTeamId} isHomeTeam={false} isRecordHidden={isRecordHidden}/>
                            ) : null
          }
          </AwayTeamRecord>
          </TeamRecordContainer>
          {
            isAdmin && !isRecordHidden ?
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
  addRowToRecord: record => dispatch(addRowToRecord(record)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(RecordPreview);




