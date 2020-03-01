import React from 'react';

import { 
  LeaguePage,
  ChampionsContainer,
  RecordsContainer,
  StandingContainer,
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