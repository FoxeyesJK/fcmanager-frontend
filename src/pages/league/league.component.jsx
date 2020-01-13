import React from 'react';
import SimpleBarReact from 'simplebar-react';
import MATCH_DATA from '../fixture/fixture.data.js';

import { 
  LeaguePage,
  StandingContainer,
  LeagueContainer,
  FixtureContainer,
  Title,
  TableRow,
  TableHeader,
  Table
} from './league.styles.jsx';

import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import CurrentChampion from '../../components/current-champion/current-champion.component';
import Standing from '../../components/standing/standing.component';
import FixturePreview from '../../components/fixture-preview/fixture-preview.component';
import FixtureDetail from '../../components/fixture-detail/fixture-detail.component';

export default class League extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 1,
      matches: MATCH_DATA
    }
  }

  render () {
    const { matches, selectedId } = this.state;
    return (
    
    <LeaguePage>
      <Header />
      <SubHeader />
      <StandingContainer >
        <CurrentChampion />
        <Standing />
      </StandingContainer >
    </LeaguePage>
    )
  }
}
