import styled from 'styled-components';

import { TitleColor, MainTableColor, SubTableColor } from '../../global.styles';

export const AdminMatchContainer = styled.div`
    padding: 10px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    width: 35%;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;

export const AdminMatchTable = styled.div`
    background-color: ${SubTableColor};
    width: 100%;
    table-layout: fixed;
    display: table;
    padding: 5px 10px;
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 16px;
    background-color: ${MainTableColor};
`;

export const MatchDate = styled.div`
    font-weight: bold;
    padding: 5px;
    margin: auto;
`;

export const MatchTitle = styled.div`
    padding: 5px;
`;

export const TableBody = styled.div`
    > div:nth-child(even) {background-color: ${MainTableColor};}
    > div:nth-child(odd) {background-color: ${SubTableColor};}
`;
