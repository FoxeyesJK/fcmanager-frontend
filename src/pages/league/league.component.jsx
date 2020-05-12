import React from 'react';
import {useDispatch} from 'react-redux';

import { 
  LeaguePage,
  ChampionsContainer,
  RecordTablesContainer,
  StandingContainer,
  RecordsContainer,
  RecordContainer
} from './league.styles.jsx';

import { fetchLeagueStandingsStart, fetchLeagueMatchRecordsStart } from '../../redux/league/league.actions';

import Champions from '../../components/champions/champions.component';
import Standing from '../../components/standing/standing.component';
import Record from '../../components/record/record.component';

const League = () => {

  const dispatch = useDispatch();

  dispatch(fetchLeagueStandingsStart())
  dispatch(fetchLeagueMatchRecordsStart())
    return (
    <LeaguePage>
      <ChampionsContainer>
        <Champions />
      </ChampionsContainer>
      <RecordTablesContainer>
        <StandingContainer >
            <Standing />
        </StandingContainer >
        <RecordsContainer>
          <RecordContainer>
            <Record type={'score'} />
          </RecordContainer>
          <RecordContainer>
            <Record type={'assist'} />
          </RecordContainer>
        </RecordsContainer>
      </RecordTablesContainer>
    </LeaguePage>
    )
}

export default League;
