import React from 'react';

import './admin.styles.scss';

import AdminSchedule from '../../components/admin-schedule/admin-schedule.component';
import AdminMatch from '../../components/admin-match/admin-match.component';

const AdminPage = () => {
  return (
    <div className='admin-page'>
      <AdminSchedule />
      <AdminMatch />
    </div>
  )
}

export default AdminPage;

