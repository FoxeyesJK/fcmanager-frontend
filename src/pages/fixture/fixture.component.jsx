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
  const [button, setButton] = useState({ selectedId: undefined, type: '' })

  const { selectedId, type } = button;

  const match = selectedId != 0 
                ? matches.flatMap(({matches}) => matches).find(({id}) => id === selectedId) 
                : {
                  homeTeamName: '',
                  homeTeamId: '',
                  homeScore: 0,
                  awayTeamName: '',
                  awayTeamId: 0,
                  awayscore: 0,
                  scheduledAt: '',
                  location: '',
                  leagueId: '',
                  club: '',
                  clubId: 1
                }

  const handleClick = (id, type) => {
    console.log(id)
    setButton({ selectedId: id, type: type });
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
              matches.map(({ id, ...otherMatchProps }) => (
                <FixturePreview key={id} id={selectedId} type={type} handleClick={handleClick} {...otherMatchProps} />
              ))
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {
          !!match 
          ? <FixtureDetail handleClick={handleClick} isAdmin={isAdmin} match={match}/>
          : null
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

