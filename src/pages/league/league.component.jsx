import React from 'react';

import MATCH_DATA from './match.data.js';

import { 
  LeaguePage,
  StandingContainer,
  LeagueContainer 
} from './league.styles.jsx';

import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import CurrentChampion from '../../components/current-champion/current-champion.component';
import Standing from '../../components/standing/standing.component';
import MatchPreview from '../../components/match-preview/match-preview.component';

class League extends React.Component {
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
    
    <LeaguePage>
      <Header />
      <SubHeader />
      <StandingContainer >
        <CurrentChampion />
        <Standing />
      </StandingContainer >
      <LeagueContainer>
      {
          matches.map(({ id, ...otherMemberProps }) => (
            <MatchPreview key={id} {...otherMemberProps} />
          ))
      }
      </LeagueContainer>
    </LeaguePage>
    )
  }
}

export default League;
