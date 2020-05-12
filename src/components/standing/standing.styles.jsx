import styled, {css} from 'styled-components';

import { MainTableColor } from '../../global.styles';

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
    padding: 10px;
    background-color: ${SubBackgroundColor};
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(19,20,21,.1);
    
    @media screen and (max-width: 1300px) {
        margin: 0 15px;
    }

    @media screen and (max-width: 800px) {
        border-top: 1px solid white;
    }

`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    margin: 5px 0px;
    text-align: center;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Table = styled.table`
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
    padding: 5px;
    width: 35px;

    @media screen and (max-width: 800px) {
        display: ${props => props.isMobileOff ? "none" : ""}
    }
`;

export const TableData = styled.td`
    padding: 5px;

    @media screen and (max-width: 800px) {
        display: ${props => props.isMobileOff ? "none" : ""}
    }
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
    padding-left: 5px;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const TableIndexHeader = styled.th`
    width: 40px;
    text-align: left;
    padding-left: 5px;
`;

export const TableIndexData = styled.td`
    text-align: left;
    padding-left: 5px;
`;


