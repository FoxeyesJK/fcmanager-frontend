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
import { addRecord } from '../../redux/record/record.actions';

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

const RecordItem = ({ record, teamId, memberOptions, addRecord, isAdmin, isRecordAdmin }) => {

  const { scoreMemberId, scoreMemberName, assistMemberId, assistMemberName, matchId } = record;
  
  return (
        <RecordDetailItemContainer>
          <PlayerContainer>
            <Player>
            {
              isAdmin && isRecordAdmin ?       
              <CustomDropdown
                    name='member'
                    value={scoreMemberId}
                    handleChange={member => addRecord({ ...record, scoreMemberId: member.value })}
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
                    handleChange={member => addRecord({ ...record, assistMemberId: member.value })}
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
  addRecord: record => dispatch(addRecord(record))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RecordItem);


