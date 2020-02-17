import React, { useState } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import MATCH_DATA from './fixture.data.js';
import SimpleBarReact from 'simplebar-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectMatches, selectScheduledMatches, selectSelectedMatchId } from '../../redux/match/match.selectors';

import { setSelectedMatchId, addNewMatch } from '../../redux/match/match.actions';
import { toggleRecordHidden } from '../../redux/record/record.actions';

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

const Fixture = ({ isAdmin}) => {

  //const [sections, setSection] = useState({ matchId: 0, section: '' })
  //const { matchId, section } = sections;

  const dispatch = useDispatch();
  const matchId = useSelector(selectSelectedMatchId, shallowEqual)
  const matches = useSelector(selectScheduledMatches, shallowEqual)

  // useEffect(() => {
  //   useSelector(selectScheduledMatches, shallowEqual)
  // }, [matches]);

  const newMatch = {
    id: 0,
    homeTeamId: 0,
    homeScore: 0,
    awayTeamId: 0,
    awayScore: 0,
    scheduledAt: new Date(),
    location: '',
    leagueId: 1,
    clubId: 1,
    matchRecords: []
  }


  const handleClick = (id, type) => {
    //setSection({ matchId: id, section:'' });
    if (id === 0)
    {
      console.log(newMatch)
      dispatch(addNewMatch(newMatch))
    }
    dispatch(setSelectedMatchId(id))
    dispatch(toggleRecordHidden(true))

    //If id = 0 create 
  }

  // var match = matchId != 0 && !!matches
  // ? matches.flatMap(({matches}) => matches).find(({id}) => id === matchId) 
  // : {
  //   id: 0,
  //   homeTeamId: '',
  //   homeScore: 0,
  //   awayTeamId: 0,
  //   awayScore: 0,
  //   scheduledAt: new Date(),
  //   location: '',
  //   leagueId: 1,
  //   clubId: 1,
  //   matchRecords: []
  // }

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
              <TableHeader>HOME</TableHeader>
              <TableHeader>VS</TableHeader>
              <TableHeader>AWAY</TableHeader>
          </TableRow>
          <SimpleBarReact style={{maxHeight: 700}}>
          {
            !!matches ? 
              matches.value().map(match => 
                <FixturePreview selectedMatchId={matchId} handleClick={handleClick} scheduledOn={match.scheduledOn} matches={match.items}/>
              ) : null
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {console.log('fix')}
        {
          (isAdmin && matchId != undefined) || (!isAdmin && matchId != 0) ?
          <FixtureDetail isAdmin={isAdmin} /> 
          : null
        }
      </FixtureContainer>
    </FixturePage>
  )
}



export default Fixture;

