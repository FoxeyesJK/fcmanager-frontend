import styled, {css} from 'styled-components';

import { ReactComponent as SoccerIcon } from '../../assets/icon-soccerball.svg';
import { ReactComponent as ShoesIcon } from '../../assets/icon-soccershoes.svg';

import { TitleColor, MainTableColor, SubTableColor, SubBackgroundColor } from '../../global.styles';

const IconStyles = css`
    height: 20px;
    width: 20px;
    margin: 10px;
`;

export const TeamIcon = styled.div`
    background-image: url(${props => props.teamLogoUrl});
    background-size: 20px;
    width: 20px;
    height: 20px;
    outline: none;
`;

export const ScoreIcon = styled(SoccerIcon)`
    ${IconStyles}
`;

export const AssistIcon = styled(ShoesIcon)`
    ${IconStyles}
`;

export const RecordContainer = styled.div`
    background-color: ${SubBackgroundColor};
    width: 100%;
    margin-left: 10px;
    display: flex;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 100%;
        margin: 0;
        border-top: 1px solid white;
    }
`;

export const RecordContentContainer = styled.div`
`;

export const IconContainer = styled.div`
    margin: 10px;
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 50%;

`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 10px 5px 0px 5px;
`;

export const Table = styled.table`
    background-color: ${SubBackgroundColor};
    text-align: center;
    width: 100%;
    //border: 3px solid ${SubBackgroundColor};
`;

export const TableHead = styled.thead`
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
    // &:nth-child(even) {background-color: ${SubTableColor}}
    // &:nth-child(odd) {background-color: ${MainTableColor}}
`;

export const TableIndexHeader = styled.th`
    text-align: left;
    width: 40px;
    padding-left: 5px;
`;

export const TableTeamHeader = styled.th`
    text-align: left;
    width: 40px;
`;

export const TableMemberHeader = styled.th`
    text-align: left;
    width: 500px;
    padding: 5px;
`;
export const TableGoalHeader = styled.th`
    padding: 5px;
    width: 80px;
`;


export const TableIndexData = styled.td`
    text-align: left;
    padding-left: 5px;
`;

export const TableTeamData = styled.td`
    text-align: center;
    padding: 5px;
`;

export const TableMemberData = styled.td`
    padding: 5px 10px;
    text-align: left;
`;

export const TableGoalData = styled.td`
    padding: 5px;
`;




