import styled from 'styled-components';

export const TableRow = styled.div`
    text-align: center;
    display: flex;
`;

export const TableData = styled.div`
    padding: 5px;
    margin: auto;
    font-size: 12px;
    &:nth-child(1) {
        width: 30%;
    }
    &:nth-child(2) {
        width: 40%;
    }
    &:nth-child(3) {
        width: 25%;
    }
    &:nth-child(4) {
        width: 5%;
    }

    div > input {
        background-color: #441f69;
        color: white;
    }

`;

// div {
//     color: white;
//     background-color: #441f69;
// }

// div > td {
//     color: white;
// }