import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as SquadIcon } from '../../assets/icon-squad.svg';
import { ReactComponent as ReportIcon } from '../../assets/icon-report.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/icon-schedule.svg';
import { ReactComponent as AdminIcon } from '../../assets/icon-adminuser.svg';


const IconStyles = css`
  height: 24px;
  width: 40px;
  display: inline-block;
  vertical-align: middle;

  @media screen and (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;


export const MenuContainer = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  background: #0F0F0F;
  padding: 1.5em;
  position: fixed;
  left: 0;
  width: 20%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 15vw;
    padding: 10px;
  }
`;

export const TitleOptionContainer = styled.div`

`;

export const TitleContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 10px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    width: 100%;

        @media screen and (max-width: 800px) {
      margin-top: 0;
    }
`;

export const ClubName = styled.div`
      font-size: 25px;
      font-weight: 700;
      padding: 5px;
`;

export const ClubType = styled.div`
      font-size: 20px;
      font-weight: 300;
      padding: 5px;
`;

export const OptionLink = styled(Link)`
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid 	#404040;

      @media (max-width: 800px) {
        padding: 20px 0;
        margin: auto;
      }
`;

export const OptionName = styled.div`
  margin-left: 3px;
  font-size: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const StyledLeagueIcon = styled(ReportIcon)`
    ${IconStyles}
`;

export const StyledScheduleIcon = styled(ScheduleIcon)`
    ${IconStyles}
`;

export const StyledSquadIcon = styled(SquadIcon)`
    ${IconStyles}
`;

export const StyledAdminIcon = styled(AdminIcon)`
    ${IconStyles}
`;
