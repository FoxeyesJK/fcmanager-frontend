import React from 'react';

import './admin-member.styles.scss';

import AdminMember from '../../components/admin-member/admin-member.component';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';

const AdminMemberPage = () => {
  return (
    <div className='admin-member-page'>
      <Header />
      <SubHeader />
      <AdminMember />
    </div>
  )
}

export default AdminMemberPage;

