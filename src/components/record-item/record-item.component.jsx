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

const RecordItem = ({ record, teamId, memberOptions, isAdmin }) => {
  const [records, setRecords] = useState(record);
  const { scoreMemberId, scoreMemberName, assistMemberId, assistMemberName } = records;

  useEffect(() => {
    setRecords(records)
  }, [records]);

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
          {
            console.log(records)
          }
          <PlayerContainer>
            <Player>
            {
              isAdmin ?       
              <CustomDropdown
                    name='member'
                    value={scoreMemberId}
                    handleChange={member => setRecords({ ...records, scoreMemberId: member.value })}
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    required
                /> :
              scoreMemberName
            }
            </Player>
            <Player>
            {
              isAdmin ?       
              <CustomDropdown
                    name='member'
                    value={assistMemberId}
                    handleChange={member => setRecords({ ...records, assistMemberId: member.value })}
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    required
                /> :
              assistMemberName
            }
            </Player>
          </PlayerContainer>
            {/* <PlayerContainer>
              <StyledScoreIcon />
              {
                  isAdmin ?
                  <CustomDropdown
                    name='team'
                    value={teamId}
                    handleChange={team => setMembers({ ...members, teamId: team.value })}
                    options={teams}
                    required
                />
                : <Player>{memberName}</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <CustomDropdown
                    name='team'
                    value={teamId}
                    handleChange={team => setMembers({ ...members, teamId: team.value })}
                    options={teams}
                    required
                />
                : <Player>{memberName}</Player>
                }
              <StyledScoreIcon />
            </PlayerContainer>
          </Record>
          <Record>
            <PlayerContainer>
              <StyledAssistIcon />   
                {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
            </PlayerContainer>
            <PlayerContainer>
            {
                  isAdmin ?
                  <Dropdown/>
                : <Player>Nathan Jeong</Player>
                }
              <StyledAssistIcon />
            </PlayerContainer> */}
        </RecordDetailItemContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  memberOptions: selectMemberNames,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RecordItem);


