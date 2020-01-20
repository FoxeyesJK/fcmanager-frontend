import styled from 'styled-components';

export const LeaguePage = styled.div`
`;

export const StandingContainer = styled.div`
 
`;

export const StandingContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #321450;
    margin: 5px 10px;
`;

export const LeagueContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #321450
`;

export const FixtureContainer = styled.div`
    padding: 15px;
    width: 65%;
`;

export const RecordContainer = styled.div`
    display: flex;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
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
    background-color: #361556;
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
// .league-page {
//     width: 1400px;

//     .league-top {
//         display: flex;
//         justify-content: space-between;
//     }
// }