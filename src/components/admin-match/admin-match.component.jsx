import React from 'react'
import './admin-match.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import MatchItem from '../admin-match-item/admin-match-item.component';
import MatchAddItem from '../admin-match-add-item/admin-match-add-item.component';

import MATCH_DATA from '../../pages/schedule/match.data';

export default class AdminMatch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    count: 0,
    matches: MATCH_DATA
  }
}

  render() {
    const { count, matches } = this.state;

    return (
      <div className='admin-match'>
          <h3>Match</h3>

          <table className='admin-match-table'>
            <tr>
              <th className=''>Home</th>
              <th className=''></th>
              <th className=''>Away</th>
            </tr>
            {
              matches.map(({ id, ...otherMatchProps }) => (
                <MatchItem key={id} {...otherMatchProps} />
              ))
            }
            {
              <MatchAddItem />
            }
          </table>
      </div>
    )
  }
}