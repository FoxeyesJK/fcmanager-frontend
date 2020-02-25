import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { selectChampions, selectFirstChampion, selectSecondChampion, selectThirdChampion } from '../../redux/league/league.selectors';

import {
  ChampionsContainer,
  ChampionContainer,
  IconContainer,
  BarDesign,
  TeamContainer,
  TitleContainer,
  Title,
  Team,
  TeamIcon, 
  ChampionIcon,
  FirstPlace,
  SecondPlace,
  ThirdPlace,
  FirstBarDesign,
  SecondBarDesign,
  ThirdBarDesign
} from './champions.styles.jsx';

const Champions = () => {
  const champions = useSelector(selectChampions, shallowEqual)

  return (
    <ChampionsContainer>
        <ChampionContainer>
          <IconContainer>
            <SecondPlace />
          </IconContainer>
          <SecondBarDesign>
          {
          champions.filter((champion, index) => index === 1).map(champion => champion.teamName)
          }
          </SecondBarDesign>
        </ChampionContainer>
        <ChampionContainer>
        <IconContainer>
        <FirstPlace />
        </IconContainer>
        <FirstBarDesign>
          {champions.filter((champion, index) => index === 0).map(champion => champion.teamName)}
          </FirstBarDesign>
        </ChampionContainer>
        <ChampionContainer>
        <IconContainer>
        <ThirdPlace />
        </IconContainer>
        <ThirdBarDesign>
          {champions.filter((champion, index) => index === 2).map(champion => champion.teamName)}
          </ThirdBarDesign>
        </ChampionContainer>

      {/* <IconContainer>
        <TeamIcon teamLogoUrl={teamLogoUrl} />
      </IconContainer>
      <TeamContainer>
        <ChampionIcon />
        <Team>{teamName}</Team>
      </TeamContainer> */}
    </ChampionsContainer>
  )
}

export default Champions;