import React from 'react'
import './admin-match.styles.scss';

import CustomIconButton from '../../components/custom-icon-button/custom-icon-button.component';

import MatchItem from '../match-item/match-item.component';
import MatchAddItem from '../admin-match-add-item/admin-match-add-item.component';

import MATCH_DATA from '../../pages/league/match.data';

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
          <h3>Match</h3>

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
              .map(({ id, ...otherMatchProps}) => (
                <div className='admin-match-container'>
                  {selectedId}
                  {
                    selectedId == id?
                    <MatchAddItem />
                    : <MatchItem key={id} id={id} handleClick={this.handleClick} {...otherMatchProps} />
                  }
                </div>
              
              ))
                              //<ScoreItem key={id} {...otherScoreProps} />]
            }
            {
              <MatchAddItem />
            }
            </div>
          </div>
      </div>
    )
  }
}