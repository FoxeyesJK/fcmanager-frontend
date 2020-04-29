import styled, {css}from 'styled-components';

import { ReactComponent as ChampIcon } from '../../assets/icon-champion.svg';
import { ReactComponent as FirstPlaceIcon } from '../../assets/icon-first-trophy.svg';
import { ReactComponent as SecondPlaceIcon } from '../../assets/icon-second-trophy.svg';
import { ReactComponent as ThirdPlaceIcon } from '../../assets/icon-third-trophy.svg';

import { TitleColor } from '../../global.styles';

const IconStyles = css`
    height: 80px;
    width: 80px;

    @media screen and (max-width: 800px) {
        height: 60px;
        width: 60px;
    }
`;

const BarStyles = css`
    width: 100%;
    text-align: center;
    background-color: #b6c0c8
    border: 2px solid grey;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 20px 0;
    font-style: italic;
    border-radius: 20px 20px 0 0;

    @media screen and (max-width: 800px) {
        font-size: 10px;
    }
`;

export const FirstPlace = styled(FirstPlaceIcon)`
    ${IconStyles}
`;

export const SecondPlace = styled(SecondPlaceIcon)`
    ${IconStyles}
    display: flex;
    justify-content: center;
`;

export const ThirdPlace = styled(ThirdPlaceIcon)`
    ${IconStyles}
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ChampionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const ChampionContainer = styled.div`
    width: 15%;

    @media screen and (max-width: 800px) {
        width: 20%;
    }
`;

export const FirstBarDesign = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    padding: 20px 0;
    ${BarStyles}
`;

export const SecondBarDesign = styled.div`
    align-self: flex-end;
    height: 200px;
    padding: 20px 0;
    ${BarStyles}
`;


export const ThirdBarDesign = styled.div`
    align-self: flex-end;
    height: 150px;
    ${BarStyles}
`;


export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding-bottom: 30px;
`;


export const TitleContainer = styled.div`
    display: flex;
`;

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 0;
`;

export const Team = styled.div`
    font-size: 18px;
    text-align: center;
    padding-left: 5px;
`;

export const TeamIcon = styled.div`
    margin:auto;
    background-image: url(${props => props.teamLogoUrl});
    background-size: 80px;
    ${IconStyles}
`;

export const ChampionIcon = styled(ChampIcon)`
    height: 20px;
    width: 20px;
`;
