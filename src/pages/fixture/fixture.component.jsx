import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import MATCH_DATA from './fixture.data.js';
import SimpleBarReact from 'simplebar-react';
import moment from 'moment';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectMatches, selectScheduledMatches, selectSelectedMatchId } from '../../redux/match/match.selectors';
import { selectIsAdmin } from '../../redux/user/user.selectors';

import { setSelectedMatchId, addNewMatch, deleteMatchesStart } from '../../redux/match/match.actions';
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

const Fixture = () => {

  //const [sections, setSection] = useState({ matchId: 0, section: '' })
  //const { matchId, section } = sections;

  const dispatch = useDispatch();
  const matchId = useSelector(selectSelectedMatchId, shallowEqual)
  const matches = useSelector(selectScheduledMatches, shallowEqual)
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)

  const newMatch = {
    id: 0,
    homeTeamId: 0,
    homeScore: 0,
    awayTeamId: 0,
    awayScore: 0,
    scheduledAt: moment(new Date()).format(),
    scheduledOn: undefined,
    location: '',
    leagueId: 1,
    clubId: 1,
    matchRecords: []
  }


  const handleClick = (id, type) => {
    //setSection({ matchId: id, section:'' });
    if (id === 0)
    {
      dispatch(addNewMatch(newMatch))
    }

    if (type === 'delete' || type === 'delete-blue')
    {
      dispatch(deleteMatchesStart(id))
    }

    dispatch(setSelectedMatchId(id))
    dispatch(toggleRecordHidden(true))
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
              <TableHeader>HOME</TableHeader>
              <TableHeader>VS</TableHeader>
              <TableHeader>AWAY</TableHeader>
              <TableHeader></TableHeader>
          </TableRow>
          <SimpleBarReact style={{maxHeight: 700}}>
          {
            !!matches ? 
              matches.value().map(match => 
                <FixturePreview key={match.id} scheduledOn={match.scheduledOn} matches={match.items} selectedMatchId={matchId} handleClick={handleClick} />
              ) : null
          }
          </SimpleBarReact>
        </Table>
        </FixtureListContainer>
        {
          (isAdmin && matchId !== undefined) || (!isAdmin && matchId !== undefined) ?
          <FixtureDetail /> 
          : null
        }
      </FixtureContainer>
    </FixturePage>
  )
}



export default Fixture;

