import styled from 'styled-components';

export const TableRow = styled.div`
    text-align: center;
    display: flex;
    
`;

export const TableData = styled.div`
    padding: 5px;
    margin: auto;
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

// export const TableRow = styled.tr`
//     text-align: center;
    
// `;

// export const TableData = styled.td`
//     padding: 0 5px 5px 5px;
// `;