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
import { selectMemberNames } from '../../redux/member/member.selectors';

import {
  RecordDetailItemContainer,
  Record,
  PlayerContainer,
  Player,
  StyledAssistIcon,
  StyledScoreIcon,
} from './record-item.styles.jsx';

import Dropdown from '../custom-dropdown/custom-dropdown.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const RecordItem = ({ record, teamId, memberOptions, isAdmin, isRecordAdmin, handleChange }) => {
  // const [records, setRecords] = useState(record);
  const { scoreMemberId, scoreMemberName, assistMemberId, assistMemberName } = record;

  // useEffect(() => {
  //   setRecords(record)
  // }, [record]);

  // const handleSubmit = type => event => {
  //   event.preventDefault();

  //   //type == 'add' ? postMatchesStart(matches) : putMatchesStart(matches);
  // }
  
  // const handleChange = event => {
  //   const { name, value } = event.target;
  
  //   setMatches({ ...matches, [name]: value });
  // }
    
  return (
        <RecordDetailItemContainer>
          <PlayerContainer>
            <Player>
            {
              isAdmin && isRecordAdmin ?       
              <CustomDropdown
                    name='member'
                    value={scoreMemberId}
                    handleChange={handleChange}
                    //add to record redux
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    required
                /> :
              scoreMemberName
            }
            </Player>
            <Player>
            {
              isAdmin && isRecordAdmin ?       
              <CustomDropdown
                    name='member'
                    value={assistMemberId}
                    handleChange={handleChange}
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    required
                /> :
              assistMemberName
            }
            </Player>
          </PlayerContainer>
        </RecordDetailItemContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  memberOptions: selectMemberNames,
})

const mapDispatchToProps = dispatch => ({
  // /fetchRecordsStart: (matchId) => dispatch(fetchRecordsStart({ matchId }))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RecordItem);


