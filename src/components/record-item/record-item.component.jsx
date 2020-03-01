import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';

import 'react-widgets/dist/css/react-widgets.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMemberNames } from '../../redux/member/member.selectors';
import { selectIsAdmin } from '../../redux/user/user.selectors';
import { addRecord } from '../../redux/record/record.actions';

import {
  RecordDetailItemContainer,
  Record,
  RecordContainer,
  Player,
  PlayerName,
  StyledAssistIcon,
  StyledScoreIcon,
} from './record-item.styles.jsx';

import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

const RecordItem = ({ record, teamId, isHomeTeam, memberOptions, addRecord, isRecordHidden }) => {

  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  const { scoreMemberId, scoreMemberName, assistMemberId, assistMemberName, matchId } = record;
  const isRecordEditable = isAdmin && !isRecordHidden;
  
  return (
        <RecordDetailItemContainer>
          <RecordContainer>
            <Player isHomeTeam={isHomeTeam}>
            <StyledScoreIcon isRecordEditable={isRecordEditable}/>
            {
              isRecordEditable ? 
              <CustomDropdown
                    name='member'
                    value={scoreMemberId}
                    handleChange={member => addRecord({ ...record, scoreMemberId: member.value })}
                    //add to record redux
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    isEmptySelectable
                /> :
              <PlayerName>{scoreMemberName}</PlayerName>
            }
            </Player>
            <Player isHomeTeam={isHomeTeam}>
            <StyledAssistIcon isRecordEditable={isRecordEditable}/>
            {
              isRecordEditable ?       
              <CustomDropdown
                    name='member'
                    value={assistMemberId}
                    handleChange={member => addRecord({ ...record, assistMemberId: member.value })}
                    options={memberOptions.filter(member => member.teamId === teamId)}
                    isEmptySelectable
                /> :
              <PlayerName>{assistMemberName}</PlayerName>
            }
            </Player>
          </RecordContainer>
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


