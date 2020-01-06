import React from 'react';

import './admin-member.styles.scss';

import AdminMember from '../../components/admin-member/admin-member.component';
import Header from '../../components/header/header.component';

const AdminMemberPage = () => {
  return (
    <div className='admin-member-page'>
      <Header />
      <AdminMember />
    </div>
  )
}

export default AdminMemberPage;

