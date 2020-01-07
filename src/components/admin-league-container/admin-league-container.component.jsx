import React from 'react';

import './admin-league-container.styles.scss';

import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import AdminSchedule from '../../components/admin-schedule/admin-schedule.component';
import AdminMatch from '../../components/admin-match/admin-match.component';

export default class AdminLeagueContainer extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <div className='admin-league-container'>
        <Header />
        <SubHeader />
        <AdminSchedule />
        <AdminMatch />
      </div>
    )
  }
}

