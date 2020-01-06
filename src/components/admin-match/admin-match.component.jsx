import React from 'react'
import './admin-match.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import MatchItem from '../admin-match-item/admin-match-item.component';
import MatchAddItem from '../admin-match-add-item/admin-match-add-item.component';
import MatchDetail from '../admin-match-detail/admin-match-detail.component';

import MATCH_DATA from '../../pages/league/match2.data';

export default class AdminMatch extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    count: 0,
    selectedId: 0,
    matches: MATCH_DATA
  }
}

handleClick = (id) => {

  // const { name, value } = event.target;
  this.setState({ selectedId: id })
}


  render() {
    const { count, selectedId, matches } = this.state;

    return (
      <div className='admin-match'>
          <div className='admin-match-table'>
            <div className='header'>
              <div className='column'>
                <span className=''>Home</span>
              </div>
              <div className='column'>
                <span className=''></span>
              </div>
              <div className='column'>
                <span className=''>Away</span>
              </div>
            </div>
            <div>
            {
              matches
              .filter((id) => id != selectedId)
              .map((match) => (
                <div className='admin-match-container'>
                  {
                    <MatchItem key={match.id} id={match.id} match={match} handleClick={this.handleClick} />
                  }
                </div>
              
              ))
                              //<ScoreItem key={id} {...otherScoreProps} />]
            }
            </div>
          </div>
              <MatchDetail id={selectedId} />
      </div>
    )
  }
}