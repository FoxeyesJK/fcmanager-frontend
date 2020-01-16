import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as SquadIcon } from '../../assets/icon-squad.svg';
import { ReactComponent as StrategyIcon } from '../../assets/icon-strategy.svg';
import { ReactComponent as PaymentIcon } from '../../assets/icon-payment.svg';
import { ReactComponent as ReportIcon } from '../../assets/icon-report.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/icon-schedule.svg';


const IconStyles = css`
        height: 24px;
        width: 40px;
        display: inline-block;
        vertical-align: middle;
`;

export const MenuContainer = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  background: #262626;
  padding: 1.5em;
  position: fixed;
  left: 0;
  width: 25%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 10px;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    width: 100%;
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
`;

export const OptionName = styled.div`
        margin-left: 3px;
        font-size: 20px;
`;

export const StyledLeagueIcon = styled(ReportIcon)`
    ${IconStyles}
`;

export const StyledScheduleIcon = styled(ScheduleIcon)`
    ${IconStyles}
`;




// .menu {
  // font-family: 'Open Sans Condensed', sans-serif;
  // background: #262626;
  // padding: 1.5em;
  // position: fixed;
  // left: 0;
  // width: 25%;
  // height: 100%;
  // overflow-y: auto;
  // display: flex;
  // justify-content: flex-start;
  // flex-direction: column;

//   .menu-title {
//     width: 100%;
//     text-align: center;
//     padding: 10px;
//     h1 {
//       font-size: 25px;
//       font-weight: 700;
//       padding: 5px;
//     }

//     span {
//       font-size: 20px;
//       font-weight: 300;
//       padding: 5px;
//     }
//   }

//   .options {
//     display: flex;
//     flex-direction: column;
//     margin-top: 1.5em;
//     width: 100%;

//     .option {
//       padding: 16px 0;
//       border-bottom: 1px solid 	#404040;

//       .icon {
//         height: 24px;
//         width: 40px;
//         display: inline-block;
//         vertical-align: middle;
//       }

//       span {
//         margin-left: 3px;
//         font-size: 20px;
//       }
//     }

//     &.selected-option {
//       background-color: #4285f4;
//       color: white;
//     }
//   }
// }