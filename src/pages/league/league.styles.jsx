import styled from 'styled-components';
import { TitleColor, SubTableColor, MainBackgroundColor } from '../../global.styles';

export const LeaguePage = styled.div`
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const StandingContainer = styled.div`
 
`;

export const StandingContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${SubTableColor};
    margin: 5px 10px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
`;

export const LeagueContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${SubTableColor}
`;

export const FixtureContainer = styled.div`
    padding: 15px;
    width: 65%;
`;

export const RecordContainer = styled.div`
    display: flex;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;

export const Table = styled.div`
    margin: 5px 10px;
    //background-color: #a3a3a3;
`;

export const TableRow = styled.div`
    width: 100%;
    display: flex;
`;

export const TableHeader = styled.div`
    background-color: ${MainBackgroundColor};
    text-align: left;
    padding: 5px 5px;
    font-size: 12px;
    font-weight: bold;
    color: #A9A9A9;

    &:nth-child(1) {
        text-align: center;
        width: 70px;
    }
    &:nth-child(2) {
        text-align: left;
        width: 300px;
    }
    &:nth-child(3) {
        text-align: center;
        width: 60px;
    }
    &:nth-child(4) {
        text-align: left;
        width: 400px;
    }
`;
