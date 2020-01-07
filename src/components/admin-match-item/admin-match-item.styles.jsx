import styled, { css } from 'styled-components';

const StyledColumn = css`
    width: 40%;
`;

export const AdminMatchData = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

export const TableHomeColumn = styled.div`
    text-align: right;
    ${StyledColumn}
`;

export const TableAwayColumn = styled.div`
    text-align: left;
    ${StyledColumn}
`;


export const TableData = styled.span`
    padding: 0px 5px;
    font-size: 16px;
`;

export const TableScoreColumn = styled.div`
    width: 10%
    text-align: center;
`;
