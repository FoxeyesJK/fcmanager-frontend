import styled from 'styled-components';
import { SubTableColor } from '../../global.styles';

export const LeaguePage = styled.div`
    padding: 30px;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const ChampionsContainer = styled.div`
    padding: 30px;
`;

export const StandingContainer = styled.div`
    width: 60%
    padding: 10px 15px;
    display: flex;

    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 0;
    }
`;

export const RecordTablesContainer = styled.div`
    display: flex;
    justfy-content: space-between;
    width: 100%;

    @media screen and (max-width: 1000px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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

export const RecordsContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 15px;
    }
`;


export const RecordContainer = styled.div`
    margin: 10px 15px;

    @media screen and (max-width: 1300px) {
        height: 100%;
        margin: 10px 0 0 0;
    }
`;