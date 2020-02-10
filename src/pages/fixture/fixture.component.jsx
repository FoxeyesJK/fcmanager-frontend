import React, { useState } from 'react';
import MATCH_DATA from './fixture.data.js';
import SimpleBarReact from 'simplebar-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectMatches } from '../../redux/match/match.selectors';

import { 
  FixturePage,
  StandingContainer,
  LeagueContainer,
  FixtureContainer,
  FixtureListContainer,
  TitleContainer,
  SimpleBarReactContainer,
  Title,
  TableRow,
  TableHeader,
  Table
} from './fixture.styles.jsx';

import FixturePreview from '../../components/fixture-preview/fixture-preview.component';
import FixtureDetail from '../../components/fixture-detail/fixture-detail.component';
import FixtureDetailItem from '../../components/fixture-detail-item/fixture-detail-item.component';
import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';

const Fixture = ({ matches, isAdmin}) => {
  const [button, setButton] = useState({ matchId: 0, type: '' })

  const { matchId, type } = button;

  const handleClick = (id, type) => {
    console.log(id)
    setButton({ matchId: id, type: type });
  }

  var match = matchId != 0 && !!matches
  ? matches.flatMap(({matches}) => matches).find(({id}) => id === matchId) 
  : {
    id: 0,
    homeTeamId: '',
    homeScore: 0,
    awayTeamId: 0,
    awayScore: 0,
    scheduledAt: new Date(),
    location: '',
    leagueId: 1,
    clubId: 1,
    matchRecords: []
  }

  return (
    <FixturePage>
      <FixtureContainer>
      <FixtureListContainer>
        <TitleContainer>
        <Title>FIXTURES</Title>              
        {isAdmin ? <CustomIcon type='add' id={0} handleClick={handleClick}/>: null}
        </TitleContainer>
        <Table>
          <TableRow>
              <TableHeader>TIME</TableHeader>
              <TableHeader>OPPOSITION</TableHeader>
              <TableHeader>RESULT</TableHeader>
              <TableHeader>COMPETITION</TableHeader>
          </TableRow>
          <SimpleBarReact style={{maxHeight: 700}}>
          {
            !!matches ? 
              matches.map(({ id, ...otherMatchProps }) => (
                <FixturePreview key={id} id={matchId} type={type} handleClick={handleClick} {...otherMatchProps} />
              )) : null
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {
          <FixtureDetail isAdmin={isAdmin} match={match}/>
        }
      </FixtureContainer>
    </FixturePage>
  )
}

const mapStateToProps = createStructuredSelector({
  matches: selectMatches,
})

export default withRouter(connect(
 mapStateToProps 
)(Fixture));

