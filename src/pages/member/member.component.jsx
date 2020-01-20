import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  MemberPage,
  MemberContainer,
  Title
} from './member.styles';

import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import MemberPreview from '../../components/member-preview/member-preview.component';
import MemberAdd from '../../components/member-add/member-add.component';
import { selectGroupMembers } from '../../redux/member/member.selectors';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';


const Member = ({ members, isAdmin }) => {
  return (

  <MemberPage>
    <Header />
    <SubHeader />
    <Title>PLAYERS</Title>          
    {isAdmin ? <CustomIcon type='add' />: null}
    <MemberAdd />
    <MemberContainer>
    {
        members.value().map(({ ...otherMemberProps }) => (
          <MemberPreview {...otherMemberProps} isAdmin={isAdmin} />
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

