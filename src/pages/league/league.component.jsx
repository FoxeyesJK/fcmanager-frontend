import React from 'react';
import SimpleBarReact from 'simplebar-react';
import MATCH_DATA from './fixture.data.js';

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
      selectedId: 0,
      matches: MATCH_DATA
    }
  }

  handleClick = (id) => {
    // const { name, value } = event.target;
    console.log(id);
    this.setState({ selectedId: id })
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
      {/* <LeagueContainer>
      {
          matches.map(({ id, ...otherMemberProps }) => (
            <MatchPreview key={id} {...otherMemberProps} />
          ))
      }
      </LeagueContainer> */}
      <LeagueContainer>
        <FixtureContainer>
      <Title>FIXTURES</Title>
      <Table>
        <TableRow>
            <TableHeader>TIME</TableHeader>
            <TableHeader>OPPOSITION</TableHeader>
            <TableHeader>RESULT</TableHeader>
            <TableHeader>COMPETITION</TableHeader>
        </TableRow>
        <SimpleBarReact style={{ maxHeight: 500 }}>
        {
            matches.map(({ id, ...otherMatchProps }) => (
              <FixturePreview key={id} {...otherMatchProps} handleClick={this.handleClick} />
            ))
        }
        </SimpleBarReact>
      </Table>
      </FixtureContainer>
      {
        matches.map(({ id, ...otherMatchProps }) => (
          <FixtureDetail key={id} id={selectedId} {...otherMatchProps} handleClick={this.handleClick} />
        ))
      }
      </LeagueContainer>
    </LeaguePage>
    )
  }
}
