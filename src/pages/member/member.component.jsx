import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  MemberPage
} from './member.styles';

import MemberPreview from '../../components/member-preview/member-preview.component';
import { selectGroupMembers } from '../../redux/member/member.selectors';


const Member = ({ members }) => {
  return (

  <MemberPage>
    {
        members.value().map(({ ...otherMemberProps }) => (
          <MemberPreview {...otherMemberProps} />
        ))
    }
  </MemberPage>
  )
}

const mapStateToProps = createStructuredSelector({
  members: selectGroupMembers,
})

export default withRouter(connect(
 mapStateToProps 
)(Member));

