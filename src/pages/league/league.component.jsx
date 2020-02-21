import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import SimpleBarReact from 'simplebar-react';
import MATCH_DATA from '../fixture/fixture.data.js';

import { selectStandings } from '../../redux/league/league.selectors';

import { 
  LeaguePage,
  StandingContainer,
  StandingContentContainer,
  LeagueContainer,
  FixtureContainer,
  Title,
  TableRow,
  TableHeader,
  Table,
  RecordContainer
} from './league.styles.jsx';

import CurrentChampion from '../../components/current-champion/current-champion.component';
import Standing from '../../components/standing/standing.component';
import Record from '../../components/record/record.component';

const League = () => {
    return (
    <LeaguePage>
      <StandingContainer >
        <StandingContentContainer>
          <CurrentChampion />
          <Standing />
        </StandingContentContainer>
      </StandingContainer >
      <RecordContainer>
        <Record type={'score'} />
        <Record type={'assist'} />
      </RecordContainer>
    </LeaguePage>
    )
}

export default League;