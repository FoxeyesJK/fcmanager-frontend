import React from 'react';

import Header from '../../components/header/header.component';
import AdminSubHeader from '../../components/admin-sub-header/admin-sub-header.component';
import AdminSchedule from '../../components/admin-schedule/admin-schedule.component';
import AdminMatch from '../../components/admin-match/admin-match.component';

import {
  AdminLeaguePage,
  AdminLeagueContainer
} from './admin-league.styles';

const AdminLeague = () => {
  return (
    <AdminLeaguePage>
      <Header />
      <AdminSubHeader />
      <AdminLeagueContainer>
        <AdminSchedule />
        <AdminMatch />
      </AdminLeagueContainer>
    </AdminLeaguePage>
  )
}

export default AdminLeague;

