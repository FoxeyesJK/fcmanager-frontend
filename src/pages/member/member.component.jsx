import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  MemberPage,
  MemberContainer,
  TitleContainer,
  Title
} from './member.styles';

import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import MemberPreview from '../../components/member-preview/member-preview.component';
import MemberUpsert from '../../components/member-upsert/member-upsert.component';
import { selectMembers, selectTeamMembers, selectCurrentMemberId } from '../../redux/member/member.selectors';
import { setCurrentMemberId } from '../../redux/member/member.actions';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';


const Member = ({ teamMembers, members, isAdmin }) => {
  //const [button, setButton] = useState({ memberId: 0, type: '' })

  //const { memberId, type } = button;

  const dispatch = useDispatch();
  const currentMemberId = useSelector(selectCurrentMemberId, shallowEqual)
  
  const handleClick = (id, type) => {
    //setButton({ memberId: id, type: type });
    console.log(id)
    dispatch(setCurrentMemberId(id))
  }
  
  return (
    <MemberPage>
      <TitleContainer>
        <Title>PLAYERS</Title>          
        {isAdmin ? <CustomIcon type='add' id={currentMemberId} handleClick={handleClick} />: null}
      </TitleContainer>
      {
        currentMemberId === 0 ? <MemberUpsert member={{ name: '', email: '', phone: '', dob: new Date(), startedOn: new Date(), roleId: 1, teamId: 0 }} />  : null
      }
      {
      currentMemberId > 0 && members != null ? 
        members
        .filter(member => member.id === currentMemberId)
        .map((member) => (
        <MemberUpsert member={member}/> 
        ))
      : null}
      <MemberContainer>
      {
          teamMembers.value().map(({ ...otherMemberProps }) => (
            <MemberPreview {...otherMemberProps} handleClick={handleClick} isAdmin={isAdmin} />
          ))
      }
      </MemberContainer>
    </MemberPage>
  )
}

const mapStateToProps = createStructuredSelector({
  teamMembers: selectTeamMembers,
  members: selectMembers,
})

export default withRouter(connect(
 mapStateToProps 
)(Member));

