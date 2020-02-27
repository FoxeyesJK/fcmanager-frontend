import styled, {css} from 'styled-components';

import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';
import { ReactComponent as RedIcon } from '../../assets/icon-red.svg';
import { ReactComponent as YellowIcon } from '../../assets/icon-yellow.svg';

import { MainTableColor, SubTableColor} from '../../global.styles';

import { TitleColor, SubBackgroundColor } from '../../global.styles';

const IconStyles = css`
    height: 14px;
    width: 14px;
    margin: auto 0;
    @media screen and (max-width: 800px) {
        margin: auto;
    }
`;

export const StandingContainer = styled.div`
    flex-grow: 4;
    @media screen and (max-width: 800px) {
        border-top: 1px solid white;
    }

`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    margin: 5px 0px;
`;

export const Table = styled.table`
    background-color: ${SubBackgroundColor};
    text-align: center;
    width: 100%;
    //border: 3px solid ${MainTableColor};
`;

export const TableHead = styled.thead`
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
    &:nth-child(even) {background-color: ${SubBackgroundColor}}
    &:nth-child(odd) {background-color: ${SubBackgroundColor}}
`;

export const TableHeader = styled.th`
    width: 40px;
    padding: 5px;
`;

export const TableData = styled.td`
    padding: 5px;
`;

export const TableTeamData = styled.td`
    display: flex;
    text-align: left;
    padding: 5px;
`;

export const TeamIcon = styled.div`
    background-image: url(${props => props.teamLogoUrl});
    background-size: 14px;
    ${IconStyles}
`;

export const TableTeamText = styled.div`
    padding: 0 5px;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const TableTeamHeader = styled.th`
    text-align: left;
    width: 500px;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const TableIndexHeader = styled.th`
    text-align: left;
    width: 40px;
    padding-left: 5px;
`;

export const TableIndexData = styled.td`
    text-align: left;
    padding-left: 5px;
`;


