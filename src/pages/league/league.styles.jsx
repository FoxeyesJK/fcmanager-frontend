import styled from 'styled-components';
import { TitleColor, SubTableColor, MainBackgroundColor, SubBackgroundColor } from '../../global.styles';

export const LeaguePage = styled.div`

    // @media screen and (max-width: 800px) {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    // }
`;

export const ChampionsContainer = styled.div`
    padding: 20px;
`;

export const StandingContainer = styled.div`
    background-color: ${SubBackgroundColor};
    width: 60%
    margin: 0 5px;
    display: flex;

    @media screen and (max-width: 850px) {
        width: 100%;
        margin: 0;
    }
`;

export const RecordTablesContainer = styled.div`
    display: flex;
    justfy-content: space-between;
    width: 100%;
    height: 400px;

    @media screen and (max-width: 850px) {
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
    }
`;


export const RecordContainer = styled.div`
    margin: 0 5px;

    @media screen and (max-width: 1300px) {
        height: 100%;
        margin: 0;
    }
`;