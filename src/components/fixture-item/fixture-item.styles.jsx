import styled from 'styled-components';

export const TableRow = styled.div`
    text-align: center;
    display: flex;
`;

export const TableData = styled.div`
    padding: 5px 0;
    &:nth-child(1) {
        text-align: center;
        width: 25%;
    }
    &:nth-child(2) {
        text-align: left;
        width: 40%
        padding-left: 10px;
    }
    &:nth-child(3) {
        text-align: center;
        width: 20%
    }
    &:nth-child(4) {
        text-align: left;
        width: 35%;
        padding-left: 10px;
    }
`;