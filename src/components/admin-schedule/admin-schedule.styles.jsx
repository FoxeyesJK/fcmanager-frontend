import styled from 'styled-components';

export const AdminScheduleContainer = styled.div`
    padding: 10px;
    width: 70%;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFF00;
    padding: 5px 3px;
`;

export const AdminScheduleTable = styled.div`
    width: 100%;
    table-layout: fixed;
    display: table;
    padding: 5px 10px;
    min-width: 400px;
`;

export const TableRow = styled.tr`
    width: 100%;
`;

export const TableHeader = styled.th`
    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 30%;
    }
    &:nth-child(3) {
        width: 20%;
    }
    &:nth-child(4) {
        width: 50%;
    }
`;