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
import { selectGroupMembers } from '../../redux/member/member.selectors';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';


const Member = ({ members, isAdmin }) => {
  const [button, setButton] = useState({ selectedId: 0, type: '' })

  const { selectedId, type } = button;

  const handleClick = (id, type) => {
    console.log(id)
    setButton({ selectedId: id, type: type });
  }
  
  return (
    <MemberPage>
      <Header />
      <SubHeader />
      <TitleContainer>
        <Title>PLAYERS</Title>          
        {isAdmin ? <CustomIcon type='add' id={selectedId} handleClick={handleClick} />: null}
      </TitleContainer>
      {type == 'add' || type =='edit' ? <MemberUpsert id={selectedId} type={type}/> : null}
      <MemberContainer>
      {
          members.value().map(({ ...otherMemberProps }) => (
            <MemberPreview {...otherMemberProps} id={selectedId} handleClick={handleClick} isAdmin={isAdmin} />
          ))
      }
      </MemberContainer>
    </MemberPage>
  )
}

const mapStateToProps = createStructuredSelector({
  members: selectGroupMembers,
})

export default withRouter(connect(
 mapStateToProps 
)(Member));

