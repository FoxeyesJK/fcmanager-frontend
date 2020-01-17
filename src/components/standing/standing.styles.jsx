import styled from 'styled-components';

export const StandingContainer = styled.div`
    flex-grow: 4;
`;

export const Title = styled.table`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
    margin: 5px 0px;
`;

export const Table = styled.table`
    background-color: #3e1964;
    text-align: center;
    width: 100%;
    //border: 3px solid #3e1964;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {background-color: #321450}
    &:nth-child(odd) {background-color: #3e1964}
`;

export const TableHeader = styled.th`
    width: 40px;
    padding: 5px;
`;

export const TableData = styled.td`
    padding: 5px;
`;

export const TableTeamData = styled.td`
    text-align: left;
    padding: 5px;
`;

export const TableTeamHeader = styled.th`
    text-align: left;
    width: 500px;
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

