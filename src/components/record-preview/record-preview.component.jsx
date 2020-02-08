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
import { selectTeams } from '../../redux/team/team.selectors';

import {
  RecordPreviewContainer,
  HomeTeamRecord,
  AwayTeamRecord,
  Record,
  PlayerContainer,
  Player,
  StyledAssistIcon,
  StyledScoreIcon,
} from './record-preview.styles.jsx';

import RecordItem from '../record-item/record-item.component';
import Dropdown from '../custom-dropdown/custom-dropdown.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const RecordPreview = ({ matchRecords, teams, homeTeamId, awayTeamId, isAdmin }) => {
  //const { memberId, memberName, codeId, codeName, teamId } = matchRecords;

  // useEffect(() => {
  //   setMatches(matches)
  // }, [matches]);

  // const handleSubmit = type => event => {
  //   event.preventDefault();

  //   //type == 'add' ? postMatchesStart(matches) : putMatchesStart(matches);
  // }
  
  // const handleChange = event => {
  //   const { name, value } = event.target;
  
  //   setMatches({ ...matches, [name]: value });
  // }
    
  return (
        <RecordPreviewContainer>
          {
            console.log(matchRecords)
          }
          {
            console.log(homeTeamId)
          }
          <HomeTeamRecord>
          {
            !!matchRecords ?
              matchRecords.filter(record => record.scoreTeamId === homeTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={homeTeamId} isAdmin={isAdmin}/>
                            )
              : null
          }
          </HomeTeamRecord>
          <AwayTeamRecord>
          {
            !!matchRecords ?
              matchRecords.filter(record => record.scoreTeamId === awayTeamId)
                          .map(record =>
                            <RecordItem record={record} teamId={awayTeamId} isAdmin={isAdmin} />
                            )
              : null
          }
          </AwayTeamRecord>
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
        </RecordPreviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  teams: selectTeams,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RecordPreview);


