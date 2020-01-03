import React from 'react';

import './admin-league-container.styles.scss';

import AdminSchedule from '../../components/admin-schedule/admin-schedule.component';
import AdminMatch from '../../components/admin-match/admin-match.component';

export default class AdminLeagueContainer extends React.Component {
  constructor(props) {
    super(props);

}



  render() {
    return (
      <div className='admin-league-container'>
        <AdminSchedule />
        <AdminMatch />
      </div>
    )
  }
}

