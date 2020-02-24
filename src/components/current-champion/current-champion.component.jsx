import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { selectChampion } from '../../redux/league/league.selectors';

import {
  CurrentChampionContainer,
  TeamContainer,
  TitleContainer,
  Title,
  Team,
  TeamIcon, 
  ChampionIcon,
  IconContainer
} from './current-champion.styles.jsx';

const CurrentChampion = () => {
  const champion = useSelector(selectChampion, shallowEqual)

  const { teamLogoUrl, teamName } = !!champion ? champion : '';
  return (
    <CurrentChampionContainer>
      <TitleContainer>
        <Title>CHAMPION</Title>
      </TitleContainer>
      <IconContainer>
        <TeamIcon teamLogoUrl={teamLogoUrl} />
      </IconContainer>
      <TeamContainer>
        <ChampionIcon />
        <Team>{teamName}</Team>
      </TeamContainer>
    </CurrentChampionContainer>
  )
}

export default CurrentChampion;