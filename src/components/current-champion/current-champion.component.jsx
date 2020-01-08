import React from 'react';

import {
  CurrentChampionContainer,
  Title,
  Team,
  TeamIcon
} from './current-champion.styles.jsx';

const CurrentChampion = () => {
  return (
    <CurrentChampionContainer>
      <Title>Current Champion</Title>
      <TeamIcon />
      <Team>Blue</Team>
    </CurrentChampionContainer>
  )
}

export default CurrentChampion;