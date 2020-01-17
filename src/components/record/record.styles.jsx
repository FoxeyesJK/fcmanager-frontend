import styled, {css} from 'styled-components';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as SoccerIcon } from '../../assets/icon-soccerball.svg';
import { ReactComponent as ShoesIcon } from '../../assets/icon-soccershoes.svg';

const IconStyles = css`
    height: 20px;
    width: 20px;
    margin: 10px;
`;

export const ScoreIcon = styled(SoccerIcon)`
    ${IconStyles}
`;

export const AssistIcon = styled(ShoesIcon)`
    ${IconStyles}
`;

export const RecordContainer = styled.div`
    background-color: #321450;
    width: 400px;
    height: 400px;
    margin-left: 25px;
    display: flex;
`;

export const RecordContentContainer = styled.div`
`;

export const IconContainer = styled.div`
    margin: 10px;
    width: 40px;
    height: 40px;
    background-color: #FFFD5E;
    border-radius: 50%;

`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
    padding: 10px 5px 0px 5px;
`;

export const Table = styled.table`
    background-color: #321450;
    text-align: center;
    width: 100%;
    //border: 3px solid #3e1964;
`;

export const TableRow = styled.tr`
    // &:nth-child(even) {background-color: #321450}
    // &:nth-child(odd) {background-color: #3e1964}
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




