import styled from 'styled-components';
import SimpleBarReact from 'simplebar-react';

import { TitleColor, MainBackgroundColor } from '../../global.styles';

export const FixturePage = styled.div`

`;

export const StandingContainer = styled.div`
    display: flex;
`;

export const LeagueContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FixtureContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 40px;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        padding: 0
    }
`;

export const FixtureListContainer = styled.div`
    width: 60%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
`;


export const SimpleBarReactContainer = styled(SimpleBarReact)`
    max-hegit: 700
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;

export const Table = styled.div`
    margin: 5px 10px;
    //background-color: #a3a3a3;
`;

export const TableRow = styled.div`
    width: 100%;
    display: flex;
`;

export const TableHeader = styled.div`
    background-color: ${MainBackgroundColor};
    text-align: left;
    padding: 0px 0px;
    font-size: 15px;
    font-weight: bold;
    color: 	#C0C0C0;

    &:nth-child(1) {
        text-align: left;
        padding-left: 20px;
        width: 25%;
    }
    &:nth-child(2) {
        text-align: center;
        width: 27%;
    }
    &:nth-child(3) {
        text-align: center;
        width: 15%;
    }
    &:nth-child(4) {
        text-align: center;
        width: 27%;
    }
    &:nth-child(5) {
        text-align: center;
        width: 6%;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const TableBody = styled.div`
    height: 700px;
    overflow: auto;

    @media screen and (max-width: 800px) {
        height: 350px;
    }
`;