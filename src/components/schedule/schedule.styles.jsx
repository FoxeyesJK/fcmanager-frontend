import styled from 'styled-components';

export const AdminScheduleContainer = styled.div`
    padding: 10px;
    width: 65%;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFD5E;
    padding: 5px 3px;
`;

export const AdminScheduleTable = styled.div`
    width: 100%;
    table-layout: fixed;
    display: table;
    padding: 5px 10px;
`;

export const TableRow = styled.div`
    width: 100%;
    display: flex;
`;

export const TableHeader = styled.div`
    background-color: #321450;
    text-align: left;
    padding: 5px 5px;
    margin: auto;
    font-size: 12px;
    font-weight: bold;
    color: #A9A9A9;

    &:nth-child(1) {
        width: 20%;
    }
    &:nth-child(2) {
        width: 10%;
    }
    &:nth-child(3) {
        width: 40%;
    }
    &:nth-child(4) {
        width: 20%;
    }
    &:nth-child(5) {
        width: 5%;
    }
    &:nth-child(6) {
        width: 5%;
    }
`;

export const TableBody = styled.div`
    > div:nth-child(even) {background-color: #3e1964;}
    > div:nth-child(odd) {background-color: #321450;}
`;


// export const TableRow = styled.tr`
//     width: 100%;
// `;

// export const TableHeader = styled.th`
//     text-align: center;
//     padding: 0px 5px 5px 5px;
//     &:nth-child(1) {
//         width: 30%;
//     }
//     &:nth-child(2) {
//         width: 40%;
//     }
//     &:nth-child(3) {
//         width: 20%;
//     }
//     &:nth-child(4) {
//         width: 5%;
//     }
// `;