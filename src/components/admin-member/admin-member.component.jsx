import React from 'react'
import './admin-member.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import AdminMemberItem from '../admin-member-item/admin-member-item.component';
import AdminMemberUpsert from '../admin-member-upsert/admin-member-upsert.component';

import MEMBER_DATA from '../../pages/admin-member/admin-member.data';

export default class AdminMatch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    count: 0,
    members: MEMBER_DATA
  }
}

  render() {
    const { count, members } = this.state;

    return (
      <div className='admin-member'>
          <h3>Member</h3>

          <table className='admin-member-table'>
            <tr>
              <th className=''>No</th>
              <th className=''>Name</th>
              <th className=''>Email</th>
              <th className=''>Phone</th>
              <th className=''>StartDate</th>
              <th className=''>Role</th>
              <th className=''>Image</th>
              <th className=''>DOB</th>
              <th className=''>Position</th>
            </tr>
            {
              members.map(({ id, ...otherMemberProps }) => (
                <AdminMemberItem key={id} {...otherMemberProps} />
              ))
            }
          </table>
          <AdminMemberUpsert />
      </div>
    )
  }
}