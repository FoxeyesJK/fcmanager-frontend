import styled, {css}from 'styled-components';

import { ReactComponent as ChampIcon } from '../../assets/icon-champion.svg';
import { ReactComponent as FirstPlaceIcon } from '../../assets/icon-first-trophy.svg';
import { ReactComponent as SecondPlaceIcon } from '../../assets/icon-second-trophy.svg';
import { ReactComponent as ThirdPlaceIcon } from '../../assets/icon-third-trophy.svg';


import { TitleColor } from '../../global.styles';

const IconStyles = css`
    height: 80px;
    width: 80px;
`;

export const FirstPlace = styled(FirstPlaceIcon)`
    height: 80px;
    width: 80px;
`;

export const SecondPlace = styled(SecondPlaceIcon)`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
`;

export const ThirdPlace = styled(ThirdPlaceIcon)`
    height: 80px;
    width: 80px;
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
`;

export const FirstBarDesign = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 300px;
    background-color: #b6c0c8
    border: 2px solid grey;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 20px 0;
    font-style: italic;
`;

export const SecondBarDesign = styled.div`
    width: 100%;
    text-align: center;
    align-self: flex-end;
    height: 200px;
    background-color: #b6c0c8
    border: 2px solid grey;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    font-style: italic;
`;


export const ThirdBarDesign = styled.div`
    width: 100%;
    text-align: center;
    align-self: flex-end;
    height: 150px;
    background-color: #b6c0c8
    border: 2px solid grey;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    font-style: italic;
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
