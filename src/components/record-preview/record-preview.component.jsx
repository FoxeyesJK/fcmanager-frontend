import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import 'react-widgets/dist/css/react-widgets.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAdmin } from '../../redux/user/user.selectors';
import { selectRecords } from '../../redux/record/record.selectors';
import { fetchRecordsStart, postRecordsStart, addRowToRecord, toggleRecordHidden } from '../../redux/record/record.actions';
import { selectIsRecordFetching, selectIsRecordsLoaded, selectIsHidden } from '../../redux/record/record.selectors';

import {
  RecordPreviewContainer,
  TeamRecordContainer,
  HomeTeamRecord,
  AwayTeamRecord,
  ButtonContainer,
  AddButtonContainer,
  SaveButtonContainer
} from './record-preview.styles.jsx';

import RecordItem from '../record-item/record-item.component';
import CustomButton from '../custom-button/custom-button.component';

const RecordPreview = ({ fetchRecordsStart, addRowToRecord, records, matchId, homeTeamId, awayTeamId, isRecordAdmin, handleIsRecordAdmin}) => {
  //const [records, setRecords] = useState(matchRecords);
  const isRecordHidden = useSelector(selectIsHidden, shallowEqual);
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  const [tempRecordId, setTempRecordId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRecordsStart(matchId);
  }, [fetchRecordsStart, matchId]);

  const handleSubmit = event => {
    event.preventDefault();
    const payload = records;
    dispatch(postRecordsStart({payload, matchId}));
    //success
    dispatch(toggleRecordHidden(true))
    //handleIsRecordAdmin();
  }

  const handleHomeClick = event => {
    setTempRecordId(tempRecordId + 1);
    addRowToRecord({scoreMemberId: null, scoreTeamId: homeTeamId, assistTeamId: homeTeamId, assistMemberId: null, matchId: matchId, id: 0, tempRecordId: tempRecordId, isHomeTeam: true})
  }

  const handleAwayClick = event => {
    setTempRecordId(tempRecordId + 1);
    addRowToRecord({scoreMemberId: null, scoreTeamId: awayTeamId, assistTeamId: awayTeamId, assistMemberId: null, matchId: matchId, id: 0, tempRecordId: tempRecordId, isHomeTeam: false})
  }
    
  return (
    <RecordPreviewContainer onSubmit={handleSubmit}>
          <TeamRecordContainer>
          <HomeTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === homeTeamId || record.assistTeamId === homeTeamId)
                          .map((record, index) =>
                            <RecordItem key={index} record={record} teamId={homeTeamId} isHomeTeam={true} isRecordHidden={isRecordHidden}/>
                            ) : null
          }
          </HomeTeamRecord>
          <AwayTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === awayTeamId || record.assistTeamId === awayTeamId)
                          .map((record, index) =>
                            <RecordItem key={index} record={record} teamId={awayTeamId} isHomeTeam={false} isRecordHidden={isRecordHidden}/>
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




