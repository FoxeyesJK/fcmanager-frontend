import React from 'react';

import MATCH_DATA from './match.data.js';

import './league.styles.scss';
import CurrentChampion from '../../components/current-champion/current-champion.component';
import Standings from '../../components/standings/standings.component';
import MatchPreview from '../../components/match-preview/match-preview.component';

class LeaguePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = 
    {
      matches: MATCH_DATA
    }
  }

  render () {
    const { matches } = this.state;
    return (
    
    <div className='league-page'>
      <div className='league-top'>
        <CurrentChampion />
        <Standings />
      </div>
      {
          matches.map(({ id, ...otherMemberProps }) => (
            <MatchPreview key={id} {...otherMemberProps} />
          ))
      }
      </div>)
  }
}

export default LeaguePage;
