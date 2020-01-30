import React, { useState, useEffect } from 'react';
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
import { selectMembers, selectGroupMembers } from '../../redux/member/member.selectors';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';


const Member = ({ grouppedMembers, members, isAdmin }) => {
  const [button, setButton] = useState({ memberId: 0, type: '' })

  const { memberId, type } = button;

  const handleClick = (id, type) => {
    console.log('selectedId')
    console.log(id)
    setButton({ memberId: id, type: type });
  }
  
  return (
    <MemberPage>
      <TitleContainer>
        <Title>PLAYERS</Title>          
        {isAdmin ? <CustomIcon type='add' id={memberId} handleClick={handleClick} />: null}
      </TitleContainer>
      {
        type == 'add' ? <MemberUpsert member={{ name: '', email: '', phone: '', dob: '', roleId: 1}} type={type}/>  : null
      }
      {
                console.log(members)
      }
      {
      type =='edit' && members != null ? 
        members
        .filter(member => member.id === memberId)
        .map((member) => (
        <MemberUpsert member={member} type={type}/> 
        ))
      : null}
      <MemberContainer>
      {
          grouppedMembers.value().map(({ ...otherMemberProps }) => (
            <MemberPreview {...otherMemberProps} handleClick={handleClick} isAdmin={isAdmin} />
          ))
      }
      </MemberContainer>
    </MemberPage>
  )
}

const mapStateToProps = createStructuredSelector({
  grouppedMembers: selectGroupMembers,
  members: selectMembers,
})

export default withRouter(connect(
 mapStateToProps 
)(Member));

