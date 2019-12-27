import React from 'react';

import MEMBER_DATA from './member.data.js';

import MemberPreview from '../../components/member-preview/member-preview.component';

class MemberPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: MEMBER_DATA
    }
  }

  render () {
    const {members} = this.state;
    return (<div className='member-page'>
      {
          members.map(({ id, ...otherMemberProps }) => (
            <MemberPreview key={id} {...otherMemberProps} />
          ))
      }
    </div>)
  }
}

export default MemberPage;

