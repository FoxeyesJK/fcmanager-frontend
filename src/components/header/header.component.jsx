import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import LogoIcon from '../../assets/icon-nvlogo.png';
import CustomDropdown from '../../components/custom-dropdown/custom-dropdown.component';

import { selectLeagues, selectCurrentLeagueId } from '../../redux/league/league.selectors';
import { setCurrentLeague } from '../../redux/league/league.actions';

import { 
  HeaderContainer, 
  LogoContainer,
  LogoImg,
  TextContainer,
  Title,
  SubTitle
} from './header.styles';

const Header = ({ match, isSelectedOption, hidden }) => {

  const dispatch = useDispatch();
  const leagues = useSelector(selectLeagues, shallowEqual)
  const leagueId = useSelector(selectCurrentLeagueId, shallowEqual)

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={LogoIcon} />
      </LogoContainer>
      <TextContainer>
        <Title>TEAM REPORT</Title>
        <SubTitle>
          {
          leagues.length > 0 ?
          <CustomDropdown
            name='team'
            value={leagueId}
            handleChange={league => dispatch(setCurrentLeague(league.value))}//setMatches({ ...matches, homeTeamId: team.value })}
            options={leagues}
            required
          /> : null
          }
          </SubTitle>
      </TextContainer>
    </HeaderContainer>
  )
};
  
export default Header;