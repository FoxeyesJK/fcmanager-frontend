import styled from 'styled-components';

export const TableRow = styled.div`
    text-align: center;
    display: flex;
    
`;

export const TableData = styled.div`
    padding: 5px 0;
    &:nth-child(1) {
        text-align: center;
        width: 80px;
    }
    &:nth-child(2) {
        text-align: left;
        width: 300px;
        padding-left: 10px;
    }
    &:nth-child(3) {
        text-align: center;
        width: 60px;
    }
    &:nth-child(4) {
        text-align: left;
        width: 30%;
        padding-left: 10px;
    }
`;

// export const TableRow = styled.tr`
//     text-align: center;
    
// `;

// export const TableData = styled.td`
//     padding: 0 5px 5px 5px;
// `;