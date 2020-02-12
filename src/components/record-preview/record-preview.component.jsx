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

const RecordPreview = ({ fetchRecordsStart, addRowToRecord, records, matchId, homeTeamId, awayTeamId, isAdmin, isRecordAdmin }) => {
  //const [records, setRecords] = useState(matchRecords);
  const [tempRecordId, setTempRecordId] = useState(0);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  //const records = useSelector(selectRecords, shallowEqual)
  const dispatch = useDispatch();

  const selectedId = 0;

  // useEffect(() => {
  //   setRecords(matchRecords)
  // }, [matchRecords]);

  useEffect(() => {
    fetchRecordsStart(matchId);
  }, [fetchRecordsStart, matchId]);

  useEffect(() => {
    setSelectedRecordId(selectedRecordId)
  }, [selectedRecordId]);

  useEffect(() => {
    console.log(tempRecordId)
    setTempRecordId(tempRecordId + 1);
  }, [addRowToRecord])


  const handleSubmit = event => {
    event.preventDefault();
    console.log('handlesubmit')
    console.log(records)
    const test = records.filter(record => record.scoreMemberId != null || record.assistMemberId != null)
    console.log(test)
    dispatch(postRecordsStart(test));
  }

  const handleChange = event => {
    console.log('target')

    //setRecords({ ...records.find(record => record.id === event.value), scoreMemberId: event.value })

    // const { name, value } = event.target;

    // setMembers({ ...members, [name]: value });
    // member => setRecords({ ...records, scoreMemberId: member.value })
  }

  
  console.log(records)
  const newRecord = {scoreMemberId: null, scoreTeamId: homeTeamId, assistMemberId: null, matchId: matchId, codeId: 7 }
  let homeRecordCount = !!records ? records.filter(record => record.scoreTeamId === homeTeamId).length : null
  let awayRecordCount = !!records ? records.filter(record => record.scoreTeamId === awayTeamId).length : null

  console.log(homeRecordCount)
  console.log(awayRecordCount)
  const countDiff = homeRecordCount - awayRecordCount;

  let i = 0;
  let insertTeamId = countDiff > 0 ? awayTeamId : homeTeamId;
  console.log(insertTeamId)

  console.log(countDiff)
  if (countDiff != 0)
  {
    console.log(i)
    while(countDiff != i)
    {
      console.log('in')
      console.log(tempRecordId)
      setTempRecordId(tempRecordId + 1);
      addRowToRecord({scoreMemberName:null, scoreMemberId: null, scoreTeamId: insertTeamId, assistMemberName: null, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId })
      i++;
    }
}

  
  // if (homeRecordCount < awayRecordCount)
  // {
  //   while(homeRecordCount != awayRecordCount)
  //   {
  //     console.log('homeAdd')
  //     setTempRecordId(tempRecordId + 1);
  //     addRowToRecord({scoreMemberName:null, scoreMemberId: null, scoreTeamId: homeTeamId, assistMemberName: null, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId })
  //     //records.push({scoreMemberId: null, scoreTeamId: homeTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId++ })
  //     homeRecordCount++;
  //   }
  // } else if (homeRecordCount > awayRecordCount)
  // {
  //   while(homeRecordCount != awayRecordCount)
  //   {
  //     console.log('awayAdd')
  //     setTempRecordId(tempRecordId + 1);
  //     addRowToRecord({scoreMemberName: null, scoreMemberId: null, scoreTeamId: awayTeamId, assistMemberName: null, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId })
  //     //records.push({scoreMemberId: null, scoreTeamId: awayTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId++ })
  //     awayRecordCount++
  //   }
  // }

  const handleClick = event => {
    console.log('clicked')
    console.log(tempRecordId)
    setTempRecordId(tempRecordId + 1);
    addRowToRecord({scoreMemberId: null, scoreTeamId: homeTeamId, assistMemberId: null, matchId: matchId, codeId: 7, id: 0, tempRecordId: tempRecordId })
    console.log(records)
  }
    
  return (
        <RecordPreviewContainer onSubmit={handleSubmit}>
          <TeamRecordContainer>
          <HomeTeamRecord>
          {
            !!records ?
              records.filter(record => record.scoreTeamId === homeTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={homeTeamId} handleChange={handleChange} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
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
                            <RecordItem record={record} teamId={awayTeamId} handleChange={handleChange} isAdmin={isAdmin} isRecordAdmin={isRecordAdmin}/>
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
            <CustomButton type='button' handleClick={handleClick}>Add</CustomButton>
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




