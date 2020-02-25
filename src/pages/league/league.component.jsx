import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import SimpleBarReact from 'simplebar-react';
import MATCH_DATA from '../fixture/fixture.data.js';

import { selectStandings } from '../../redux/league/league.selectors';

import { 
  LeaguePage,
  ChampionsContainer,
  RecordsContainer,
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

import Champions from '../../components/champions/champions.component';
import Standing from '../../components/standing/standing.component';
import Record from '../../components/record/record.component';

const League = () => {
    return (
    <LeaguePage>
      <ChampionsContainer>
        <Champions />
      </ChampionsContainer>
      <RecordsContainer>
      <StandingContainer >
          <Standing />
      </StandingContainer >
      <RecordContainer>
        <Record type={'score'} />
        </RecordContainer>
        <RecordContainer>
        <Record type={'assist'} />
      </RecordContainer>
      </RecordsContainer>
    </LeaguePage>
    )
}

export default League;