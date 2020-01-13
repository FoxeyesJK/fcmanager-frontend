import Styled from 'styled-components';

export const FixturePage = Styled.div`

`;

export const StandingContainer = Styled.div`
    display: flex;
    padding: 15px;
`;

export const LeagueContainer = Styled.div`
    display: flex;
    flex-direction: row;
`;

export const FixtureListContainer = Styled.div`
    padding: 15px;
    width: 65%;
`;

export const FixtureContainer = Styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
    padding: 5px 3px;
`;

export const Table = Styled.div`
    margin: 5px 10px;
    //background-color: #a3a3a3;
`;

export const TableRow = Styled.div`
    width: 100%;
    display: flex;
`;

export const TableHeader = Styled.div`
    background-color: #361556;
    text-align: left;
    padding: 0px 5px;
    font-size: 12px;
    font-weight: bold;
    color: 	#C0C0C0;

    &:nth-child(1) {
        text-align: left;
        width: 80px;
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